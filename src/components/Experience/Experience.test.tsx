import { describe, test, expect } from "vitest";
import { screen, within } from "@testing-library/react";
import { renderWithQueryProvider } from "../../utils.tests";
import { COMPANIES } from "../../constants";
import Experience from "./Experience";

describe("<Experience />", () => {
  test("Displays proper information per company", () => {
    renderWithQueryProvider(<Experience />);

    const chipWrappers = screen.getAllByTestId("chip-wrapper");
    const jobLists = screen.getAllByTestId("jobs");

    COMPANIES.forEach((company, index) => {
      // Name
      screen.getByText(company.name);
      // Date
      screen.getByText(company.duration);

      // Tech as chips
      const chips = within(chipWrappers[index]).getAllByTestId("chip");
      expect(chips).toHaveLength(company.tech.length);

      // Job descriptions
      const jobListItems = within(jobLists[index]).getAllByRole("listitem");
      expect(jobListItems).toHaveLength(company.jobs.length);
      company.jobs.forEach((job, jobIndex) => {
        expect(jobListItems[jobIndex].textContent).toBe(job);
      });

      // Clickable image
      const iconButton = screen.getByRole("link", { name: company.name });
      expect(iconButton.getAttribute("href")).toContain(company.url);
      expect(iconButton.getAttribute("target")).toContain("_blank");
      const img = within(iconButton)
        .getByRole("img", { name: company.name })
        .getAttribute("src");
      expect(img).toContain(company.logo);
    });
  });
});
