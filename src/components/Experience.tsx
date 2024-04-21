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
  useMediaQuery,
} from "@mui/material";
import MendLogo from "../assets/mend.svg";
import ThinkfulLogo from "../assets/thinkful.svg";
import MevysLogo from "../assets/mevys.svg";

type CompanyItem = {
  name: string;
  url: string;
  logo: string;
  duration: string;
  jobs: string[];
  tech: string[];
};

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

const timelineItems: CompanyItem[] = [
  {
    name: "Mend Telehealth Medicine",
    url: "https://mend.com/",
    logo: MendLogo,
    duration: "April 2021 - 2024",
    jobs: [
      "Participated in Agile development methodologies such as Scrum/Kanban for efficient project management.",
      "Implemented rigorous testing procedures to identify and resolve any compatibility issues or regressions.",
      "Collaborated in a pair development to execute migration of the entire dashboard from Angular/JavaScript to React/TypeScript.",
      "Develop, tested, and deployed a Video SPA using Vonage Express, GCP(Cloud Functions, Bucket Storage) overseeing the project from inception to full production.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Angular",
      "Material UI (MUI)",
      "PHP",
      "Docker",
      "GCP",
      "SQL",
    ],
  },
  {
    name: "Thinkful",
    url: "https://thinkful.com/",
    logo: ThinkfulLogo,
    duration: "Nov 2020 - March 2021",
    jobs: [
      "Remote engineer immersion program focused on learning HTML5, CSS3, Javascript ES6, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL).",
      "Designed mobile-first full-stack applications from concept development to deployment, while learning networking and industry best practices.",
    ],
    tech: ["JavaScript", "React", "HTML", "CSS", "PostgreSQL", "SQL"],
  },
  {
    name: "Mevys Healthy Hair Optimization System",
    url: "https://mevyspro.com/",
    logo: MevysLogo,
    duration: "Jun 2019 - 2021",
    jobs: [
      "Collaborated and coordinated with cross-functional teams to ensure seamless integration of software components.",
      "Provided architectural design and development of the online store to implementing an authentication system for professional stylists.",
      "Lead brainstorming sessions to generate new ideas for features and commercial relationships.",
    ],
    tech: ["JavaScript", "Liquid", "React", "CSS", "HTML", "MongoDB", "DevOps"],
  },
];

export default function Experience() {
  const isMobile = useMediaQuery("(pointer: coarse)");

  return (
    <Timeline
      position={isMobile ? "left" : undefined}
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {timelineItems.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              color="info.main"
            >
              <Stack
                spacing={1}
                minWidth={[300, 0]}
                alignItems={["baseline", "end"]}
              >
                <Typography variant="caption">{item.duration}</Typography>
                <IconButton
                  component="a"
                  color="secondary"
                  href={item.url}
                  target="_blank"
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
