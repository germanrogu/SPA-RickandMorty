import { Typography } from "@mui/material";
import React from "react";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { TabsPanel } from "../ui/molecules/TabsPanel/TabsPanel";

export const SeriesInformation = () => {
  return (
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "1.3rem",
          paddingBottom: "1.3rem",
        }}
      >
        {"Series Information"}
      </Typography>

      <TabsPanel itemOne={"1"} itemTwo={"2"} itemThree={"3"} />
    </ContentPages>
  );
};
