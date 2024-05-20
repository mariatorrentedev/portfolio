import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithQueryProvider } from "../../utils.tests";
import About from "./About";
import { ABOUT_ME_TEXT } from "../utils";

describe("<About />", () => {
  test("Displays proper information", () => {
    renderWithQueryProvider(<About />);
    const textNode = screen.getByTestId("about");
    expect(textNode.textContent).toBe(ABOUT_ME_TEXT);
  });
});
