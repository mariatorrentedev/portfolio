import * as React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { About } from "./";

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
        <Box
          maxWidth={[250, 900]}
          sx={{ paddingX: [1, 4], textAlign: "justify" }}
        >
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

type TabsContent = {
  label: string;
  component: React.ReactNode;
};

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const tabContents: TabsContent[] = [
    { label: "About", component: <About /> },
    { label: "Projects", component: <Typography> Projects </Typography> },
  ];

  return (
    <TabsWrapper>
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        // Param is intentionally unused `_`.
        onChange={(_, newValue) => handleChange(newValue)}
        aria-label="Vertical tabs example"
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
