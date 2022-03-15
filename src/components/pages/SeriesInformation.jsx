import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { TabsPanel } from "../ui/molecules/TabsPanel/TabsPanel";

export const SeriesInformation = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const [location, setLocation] = useState([]);
  const [infoLocation, setInfoLocation] = useState({});

  const url = "https://rickandmortyapi.com/api/character";
  const urlLocation = "https://rickandmortyapi.com/api/location";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  //-------------------------------------------------------------------//

  const fetchLocation = (url) => {
    axios
      .get(url)
      .then((data) => {
        setLocation(data.data.results);
        setInfoLocation(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickNextLocation = () => {
    fetchLocation(infoLocation.next);
    window.scrollTo(0, 0);
  };

  const onClickPreviousLocation = () => {
    fetchLocation(infoLocation.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchLocation(urlLocation);
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
        onClickPrevious={handlePreviousPage}
        onClickNext={handleNextPage}
        itemsCharacters={characters}

        disabledPreviousLocation={!infoLocation.prev}
        disabledNextLocation={!infoLocation.next}
        onClickPreviousLocation={onClickPreviousLocation}
        onClickNextLocation={onClickNextLocation}
        itemsLocation={location}
        itemThree={"3"}
      />
    </ContentPages>
  );
};
