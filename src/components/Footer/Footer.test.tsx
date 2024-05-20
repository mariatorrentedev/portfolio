import { screen, within } from "@testing-library/react";
import { renderWithQueryProvider } from "../../utils.tests";
import Footer from "./Footer";
import MTLogo from "../../assets/mt.png";

describe("<Footer />", () => {
  test("Displays proper information", () => {
    renderWithQueryProvider(<Footer />);

    screen.getByText("© Maria Torrente 2024");

    // Clickable MT Logo
    const iconButton = screen.getByRole("link");
    expect(iconButton.getAttribute("href")).toContain("#");
    const img = within(iconButton)
      .getByRole("img", { name: "Maria Torrente" })
      .getAttribute("src");
    expect(img).toContain(MTLogo);
  });
});
