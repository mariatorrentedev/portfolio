import * as React from "react";
import type { PaletteMode, Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { baseTheme } from "./base-theme";
import { lightPalette, darkPalette } from "./palettes";

export interface ThemeContextProps {
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  toggleTheme: () => {},
  theme: createTheme(baseTheme),
});

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // User system mode preference.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>(() =>
    prefersDarkMode ? "dark" : "light"
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(() => {
    const palette = mode === "light" ? lightPalette : darkPalette;
    return createTheme({
      ...baseTheme,
      palette,
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            ...((baseTheme.components?.MuiCssBaseline
              ?.styleOverrides as object) || {}),
            body: {
              backgroundColor: palette.primary.main,
              color: palette.info.main,
            },
          },
        },
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
