import { describe, test } from "vitest";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithQueryProvider } from "../../utils.tests";
import SpotifyNowPlaying from "./SpotifyNowPlaying";

describe("<SpotifyNowPLaying />", () => {
  test("Displays message when no session available.", () => {
    renderWithQueryProvider(<SpotifyNowPlaying />);
    expect(
      screen.getByText(
        "Maria's tunes are on pause, she's probably rocking out at a concert!"
      )
    );
  });

  //TODO: debug why is not getting beyond getAccessToken mock.
  test.skip("Displays message when session is online.", async () => {
    renderWithQueryProvider(<SpotifyNowPlaying />);
    await waitForElementToBeRemoved(
      screen.getAllByText("Syncing to Maria's Tunes...")
    );
  });
});
