import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type Navigation = "about" | "portfolio" | "contact";

export default function Navigation() {
  const [value, setValue] = React.useState<Navigation>("about");
  const handleChange = (event: React.SyntheticEvent, newValue: Navigation) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="about" />
          <Tab label="Item Two" value="portfolio" />
          <Tab label="Item Three" value="contact" />
        </TabList>
      </Box>
      <TabPanel value="about">About</TabPanel>
      <TabPanel value="portfolio">Portfolio</TabPanel>
      <TabPanel value="contact">Contact</TabPanel>
    </TabContext>
  );
}
