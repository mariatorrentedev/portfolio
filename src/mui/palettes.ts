import type { PaletteMode, PaletteColor } from "@mui/material";

type CustomPaletteColor = Omit<PaletteColor, "light" | "dark" | "contrastText">;

type CustomPalette = {
  mode: PaletteMode;
  primary: CustomPaletteColor;
  secondary: CustomPaletteColor;
  info: CustomPaletteColor;
};

export const darkPalette: CustomPalette = {
  mode: "dark",
  primary: {
    main: "#000000",
  },
  secondary: {
    main: "#FDB3FD",
  },
  info: {
    main: "#ECECEC",
  },
};

export const lightPalette: CustomPalette = {
  mode: "light",
  primary: {
    main: "#FFFFFF",
  },
  secondary: {
    main: "#E61680",
  },
  info: {
    main: "#000000",
  },
};
