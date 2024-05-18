import { GitHub, OpenInNew } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Stack,
  CardActionArea,
  IconButton,
} from "@mui/material";
import { PROJECTS } from "../../constants";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "info.main",
  padding: 16,
  flexGrow: 1,
  margin: 1,
  [theme.breakpoints.up("md")]: {
    maxWidth: 300,
  },
}));

const iconButtonSize = {
  ".MuiSvgIcon-root": { height: "2.5rem", width: "2.5rem" },
};

export default function Projects() {
  return (
    <Stack
      flexDirection={["column", "column", "row"]}
      useFlexGap
      flexWrap="wrap"
      spacing={3}
    >
      {PROJECTS.map((project, index) => (
        <StyledCard key={index}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardActionArea
              sx={{ opacity: 0.5, ":hover": { opacity: 1 } }}
              href={project.repoLink}
              target="_blank"
            >
              <CardMedia
                component="img"
                sx={{ height: 160, width: "max-content" }}
                image={project.img}
                title={project.title}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary.main"
              >
                {project.title}
              </Typography>
              <Box marginY={2}>
                {project.tech.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ margin: 0.5 }}
                  />
                ))}
              </Box>
              <Typography variant="body1" color="info.main">
                {project.description}
              </Typography>
            </CardContent>
          </Box>
          <CardActions disableSpacing data-testid="card-actions">
            <IconButton
              component="a"
              target="_blank"
              aria-label={project.title}
              href={project.repoLink}
              color="secondary"
              rel="noopener noreferrer"
              sx={iconButtonSize}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              target="_blank"
              aria-label={project.title}
              href={project.prodLink}
              color="secondary"
              rel="noopener noreferrer"
              sx={iconButtonSize}
            >
              <OpenInNew />
            </IconButton>
          </CardActions>
        </StyledCard>
      ))}
    </Stack>
  );
}
