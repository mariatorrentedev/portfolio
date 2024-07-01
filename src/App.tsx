import * as React from "react";
import type { Icon } from "./types/shared";
import { Grid, Typography, Link, IconButton } from "@mui/material";
import { GitHub, LinkedIn, LightMode, DarkMode } from "@mui/icons-material";
import { Navigation, Footer } from "./components";
import { ThemeContext } from "./mui/theme-context";

const icons: Icon[] = [
  {
    icon: <GitHub />,
    link: "https://github.com/mariatorrentedev",
    label: "GitHub",
  },
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/mariactorrente",
    label: "LinkedIn",
  },
];

export default function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <Grid
        container
        maxWidth="md"
        textAlign="left"
        margin="0 auto"
        direction="column"
        padding={["2rem", "5rem 2rem"]}
        sx={{ ".MuiGrid-root": { paddingLeft: 0 }, width: "auto" }}
        spacing={2}
      >
        <Grid item sx={{ alignSelf: "flex-end" }}>
          <IconButton color="secondary" onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Grid>

        <Grid item>
          <Typography component="h1" fontSize={[18, 42]} color="secondary">
            Hey there!
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontSize={[16, 42]}
            color="info"
            sx={{ span: { fontWeight: 600 } }}
          >
            I am <span>Maria Torrente</span>, a detail-oriented full-stack
            engineer focused on ensuring elegant solutions and creating
            meaningful experiences.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {icons.map((item, index) => (
            <IconButton
              key={index}
              aria-label={item.label}
              component="a"
              color="secondary"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </IconButton>
          ))}

          <Link
            color="secondary.main"
            component="a"
            href="/resume.pdf"
            target="_blank"
            sx={{ fontSize: ["1rem", "2rem"] }}
          >
            View full resume
          </Link>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Navigation />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
