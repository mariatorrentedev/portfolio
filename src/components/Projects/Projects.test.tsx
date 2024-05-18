import { describe, test, expect } from "vitest";
import { screen, within } from "@testing-library/react";
import { renderWithQueryProvider } from "../../utils.tests";
import { PROJECTS } from "../../constants";
import Projects from "./Projects";

describe("<Projects />", () => {
  test("Displays proper information per project", () => {
    renderWithQueryProvider(<Projects />);

    const actions = screen.getAllByTestId("card-actions");

    PROJECTS.forEach((project, index) => {
      // Title
      screen.getByText(project.title);
      // Description
      screen.getByText(project.description);

      // Tech
      project.tech.forEach((tech) => {
        screen.getAllByText(tech);
      });

      // Card Actions
      const footerLinks = within(actions[index]).getAllByRole("link");
      expect(footerLinks[0].getAttribute("href")).toContain(project.repoLink);
      expect(footerLinks[1].getAttribute("href")).toContain(project.prodLink);
    });
  });
});
