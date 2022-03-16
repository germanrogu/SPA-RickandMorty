import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { TabsPanel } from "../ui/molecules/TabsPanel/TabsPanel";

export const SeriesInformation = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [origins, setOrigins] = useState([]);

  const [location, setLocation] = useState([]);
  const [infoLocation, setInfoLocation] = useState({});
  const [infoOrigins, setInfoOrigins] = useState({});

  const url = "https://rickandmortyapi.com/api/character";
  const urlLocation = "https://rickandmortyapi.com/api/location";

  const fetch = (url, type) => {
    axios
      .get(url)
      .then((data) => {
        if (type === "characters") {
          setCharacters(data.data.results);
          setInfo(data.data.info);
        } else if (type === "locations") {
          setLocation(data.data.results);
          setInfoLocation(data.data.info);
        } else if (type === "origin") {
          setOrigins(data.data.results);
          setInfoOrigins(data.data.info);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = (infoType) => {
    infoType === "characters"
      ? fetch(info.next, "characters")
      : infoType === "locations"
      ? fetch(infoLocation.next, "locations")
      : fetch(infoOrigins.next, "origin");

    window.scrollTo(0, 0);
  };

  const handlePreviousPage = (infoType) => {
    infoType === "characters"
      ? fetch(info.prev, "characters")
      : infoType === "locations"
      ? fetch(infoLocation.prev, "locations")
      : fetch(infoOrigins.prev, "origin");

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch(url, "characters");
    fetch(urlLocation, "locations");
    fetch(url, "origin");
  }, []);

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

      <TabsPanel
        disabledPrevious={!info.prev}
        disabledNext={!info.next}
        onClickPrevious={() => handlePreviousPage("characters")}
        onClickNext={() => handleNextPage("characters")}
        itemsCharacters={characters}
        disabledPreviousLocation={!infoLocation.prev}
        disabledNextLocation={!infoLocation.next}
        onClickPreviousLocation={() => handlePreviousPage("locations")}
        onClickNextLocation={() => handleNextPage("locations")}
        itemsLocation={location}
        disabledPreviousOrigin={!infoOrigins.prev}
        disabledNextOrigin={!infoOrigins.next}
        onClickPreviousOrigin={() => handlePreviousPage("origin")}
        onClickNextOrigin={() => handleNextPage("origin")}
        itemOrigin={origins}
      />
    </ContentPages>
  );
};
