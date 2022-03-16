import { Box, styled, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { ListItemCustom } from "../../atoms/ListItemCustom/ListItemCustom";
import { ListItemLocation } from "../../atoms/ListItemLocation/ListItemLocation";
import { ListItemOrigin } from "../../atoms/ListItemOrigin/ListItemOrigin";
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

export const TabsPanel = ({
  itemsCharacters,
  itemOrigin,
  onClickPrevious,
  onClickNext,
  disabledPrevious,
  disabledNext,
  itemsLocation,
  onClickPreviousLocation,
  onClickNextLocation,
  disabledPreviousLocation,
  disabledNextLocation,
  onClickPreviousOrigin,
  onClickNextOrigin,
  disabledPreviousOrigin,
  disabledNextOrigin,
}) => {
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
          <ListItemCustom
            disabledPrevious={disabledPrevious}
            disabledNext={disabledNext}
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
            items={itemsCharacters}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListItemLocation
            disabledPreviousLocation={disabledPreviousLocation}
            disabledNextLocation={disabledNextLocation}
            onClickPreviousLocation={onClickPreviousLocation}
            onClickNextLocation={onClickNextLocation}
            itemsLocation={itemsLocation}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListItemOrigin
            disabledPreviousOrigin={disabledPreviousOrigin}
            disabledNextOrigin={disabledNextOrigin}
            onClickPreviousOrigin={onClickPreviousOrigin}
            onClickNextOrigin={onClickNextOrigin}
            itemOrigin={itemOrigin}
          />
        </TabPanel>
      </Box>
    </>
  );
};
