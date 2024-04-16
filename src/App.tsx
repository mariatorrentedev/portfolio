import { Grid, Typography, Link, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

type Icon = {
  icon: React.ReactNode;
  link: string;
  label: string;
};

export default function App() {
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

  return (
    <Grid
      container
      maxWidth="md"
      textAlign="left"
      margin="0 auto"
      padding={["5rem 2rem", "9rem 2rem"]}
      spacing={2} // Adjust the spacing between items
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
          I'm <span>Maria Torrente</span>, a detailed-oriented full-stack
          engineer, focused on ensuring elegant solutions, and create meaningful
          experiences.
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
            sx={{
              ".MuiSvgIcon-root": {
                height: ["2rem", "4rem"],
                width: ["2rem", "4rem"],
              },
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </IconButton>
        ))}
      </Grid>
      <Grid item alignSelf="center">
        <Link
          color="secondary.main"
          href="/resume.pdf"
          target="_blank"
          sx={{ fontSize: ["1rem", "2rem"] }}
        >
          View full resume
        </Link>
      </Grid>
    </Grid>
  );
}
