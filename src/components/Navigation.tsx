import * as React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { About, Experience } from "./";

const TabsWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  display: "flex",
  marginTop: "3rem",
  borderTop: `2px solid`,
  paddingTop: "3rem",
  flexDirection: "row",
  minHeight: 224,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1rem",
    marginTop: "1rem",
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  flex: 1.2,
  "& button": {
    color: theme.palette.secondary.main,
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      paddingLeft: "1rem",
      maxWidth: "100%",
      padding: "24px 60px 24px 0",
    },
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: 16,
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

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <>
      {value === index && (
        <Box
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          sx={{
            paddingX: [1, 4],
            textAlign: "justify",
            flex: 6,
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

type TabsContent = {
  label: string;
  component: React.ReactNode;
};

const tabContents: TabsContent[] = [
  { label: "About", component: <About /> },
  { label: "Experience", component: <Experience /> },
  { label: "Projects", component: <Typography> Projects </Typography> },
];

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TabsWrapper>
      <StyledTabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        // Param is intentionally unused `_`.
        onChange={(_, newValue) => handleChange(newValue)}
      >
        {tabContents.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </StyledTabs>
      {tabContents.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </TabsWrapper>
  );
}
