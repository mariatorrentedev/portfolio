import * as React from "react";
import { Box, Tab, Tabs, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from "../constants";

const TabsWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  display: "flex",
  marginTop: "1rem",
  borderTop: `2px solid`,
  paddingTop: "2rem",
  minHeight: 224,
  [theme.breakpoints.up("sm")]: {
    paddingTop: "3rem",
    marginTop: "3rem",
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  "& button": {
    color: theme.palette.secondary.main,
    fontSize: 14,
    paddingLeft: 0,
    maxWidth: 30,
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
      paddingLeft: "1rem",
      maxWidth: "100%",
      padding: "24px 60px 24px 0",
    },
  },
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.info.main,
  },
  "& .MuiTab-root": {
    alignItems: "baseline",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.info.main,
  },
}));

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box maxWidth={[250, "100%"]} sx={{ paddingX: [1, 4] }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsWrapper>
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        // (_) Param is intentionally unused.
        onChange={(_, newValue) => handleChange(newValue)}
        aria-label="Vertical tabs example"
      >
        <Tab label="About" {...a11yProps(0)} />
        <Tab label="Projects" {...a11yProps(1)} />
        <Tab label="Contact" {...a11yProps(2)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Stack spacing={1}>
          <Typography fontSize={[16, 18]}>
            I'm a curious being, who loves challenges, people and music...
          </Typography>
          <SpotifyNowPlaying
            clientId={CLIENT_ID}
            clientSecret={CLIENT_SECRET}
            refreshToken={REFRESH_TOKEN}
          />
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Projects
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contact
      </TabPanel>
    </TabsWrapper>
  );
}
