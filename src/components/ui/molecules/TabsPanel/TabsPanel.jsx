import { Box, styled, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { TabPanel } from "../../atoms/TabPanel/TabPanel";

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
};

const CustomTab = styled(Tabs)({
  "& .MuiTabs-indicator": {
    borderBottom: "4px solid #0062a3",
    backgroundColor: "#0062a3",
    borderRadius: " 15px",
  },
});

const CustomTabs = styled(Tab)({
  color: "#0062a3",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  "&:hover": {
    color: "#96CF4C",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#96CF4C",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#0062a3",
  },
});

export const TabsPanel = ({ itemOne, itemTwo, itemThree }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "2rem" }}>
        <CustomTab value={value} onChange={handleChange} variant="fullWidth">
          <CustomTabs label="Characters" {...a11yProps(0)} />
          <CustomTabs label="Locations" {...a11yProps(1)} />
          <CustomTabs label="Origins" {...a11yProps(2)} />
        </CustomTab>
        <TabPanel value={value} index={0}>
          {itemOne}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {itemTwo}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {itemThree}
        </TabPanel>
      </Box>
    </>
  );
};
