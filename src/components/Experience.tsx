import type { CompanyItem } from "../constants";
import { COMPANIES } from "../constants";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Stack,
  Chip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const renderList = (jobs: CompanyItem["jobs"]) => {
  return (
    <List>
      {jobs.map((job, index) => (
        <ListItem key={index} sx={{ textAlign: "justify" }}>
          {job}
        </ListItem>
      ))}
    </List>
  );
};

export default function Experience() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Timeline
      position={isMobile ? "left" : undefined}
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {COMPANIES.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "0 auto" }}
              align="center"
              color="info.main"
              minWidth={isMobile ? "100%" : undefined}
            >
              <Stack
                spacing={1}
                minWidth={[300, 0]}
                alignItems={["baseline", "baseline", "end"]}
              >
                <Typography variant="caption">{item.duration}</Typography>
                <IconButton
                  component="a"
                  color="secondary"
                  href={item.url}
                  target="_blank"
                  sx={{ padding: "8px 0" }}
                >
                  <img src={item.logo} alt={item.name} />
                </IconButton>
                <Typography> {item.name}</Typography>
                <Box>
                  {item.tech.map((tech, index) => (
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
                {isMobile && renderList(item.jobs)}
              </Stack>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            {!isMobile && (
              <TimelineContent color="info.main">
                {renderList(item.jobs)}
              </TimelineContent>
            )}
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
