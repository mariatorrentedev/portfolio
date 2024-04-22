import { Grid, Typography, Link, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Navigation } from "./components";

type Icon = {
  icon: React.ReactNode;
  link: string;
  label: string;
};

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
  return (
      <Grid
        container
        maxWidth="md"
        textAlign="left"
        margin="0 auto"
        alignItems="center"
        padding={["2rem", "5rem 2rem"]}
        spacing={2}
      >
        <Grid item>
          <Typography fontSize={[18, 42]} color="secondary">
            Hey there!
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontSize={[16, 42]}
            color="info"
            sx={{ span: { fontWeight: 600 } }}
          >
            I am <span>Maria Torrente</span>, a detailed-oriented full-stack
            engineer, focused on ensuring elegant solutions and creating
            meaningful experiences.
          </Typography>
        </Grid>
        <Grid item>
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
        </Grid>
        <Grid item>
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
  );
}
