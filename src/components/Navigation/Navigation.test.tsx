import { describe, test } from "vitest";
import { renderWithQueryProvider } from "../../utils.tests";
import Navigation from "./Navigation";

// TODO: understand MUI error with `.main` usages.
describe.skip("<Navigation />", () => {
  test("Displays proper information per project", () => {
    renderWithQueryProvider(<Navigation />);
  });
});
