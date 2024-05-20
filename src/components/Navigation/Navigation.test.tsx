import { describe, test } from "vitest";
import { renderWithQueryProvider } from "../../utils.tests";
import Navigation from "./Navigation";

// TODO: understand MUI error with `theme` usages, mainly custom properties.
describe.skip("<Navigation />", () => {
  test("Displays proper information per project", () => {
    renderWithQueryProvider(<Navigation />);
  });
});
