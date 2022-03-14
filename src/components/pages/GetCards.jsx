import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TimeCardContext } from "../../context/TimeCardContext";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { Timer } from "../ui/atoms/Timer/Timer";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";
import { TargetCards } from "../ui/organism/TargetCards/TargetCards";
import axios from "axios";
import { EpisodeSheetContainer } from "../ui/molecules/EpisodeSheetContainer/EpisodeSheetContainer";
import { AlbumContext } from "../../context/AlbumContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const GetCards = () => {
  const { activeTimer, resetTimer, seconds } = useContext(TimeCardContext);
  const { addToAlbum } = useContext(AlbumContext);
  const [disabled, setDisabled] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [clicked, setClicked] = useLocalStorage(false, "clicked");

  const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  };

  const getApi = (iterations, option) => {
    let url;
    for (let i = 0; i < iterations; i++) {
      if (option === "characters") {
        url = `https://rickandmortyapi.com/api/character/${randomNumber(826)}`;
        fetchCharacters(url, option);
      } else if (option === "episodes") {
        url = `https://rickandmortyapi.com/api/episode/${randomNumber(51)}`;
        fetchCharacters(url, option);
      }
    }
  };

  useEffect(() => {
    if (clicked) {
      seconds < 60 ? setDisabled(true) : setDisabled(false);
      if (seconds === 60) {
        resetTimer();
        setClicked(false);
      }
    }
  }, [clicked, resetTimer, seconds]);

  let arrayCharacters = [];
  let arrayEpisodes = [];

  const fetchCharacters = (url, option) => {
    axios
      .get(url)
      .then((data) => {
        let objectData = data.data;

        if (option === "characters") {
          arrayCharacters.push(objectData);
          setCharacters(arrayCharacters);
        } else if (option === "episodes") {
          arrayEpisodes.push(objectData);
          setEpisodes(arrayEpisodes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClick = (target) => {
    console.log("Cual", target);
    activeTimer();
    setClicked(true);
    getApi(4, "characters");
    getApi(1, "episodes");
  };

  const onClickSheet = (item) => {
    console.log("Click en la card", item);
    addToAlbum(item);
  };

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
        {"Welcome"}
      </Typography>
      <TargetCards disabled={disabled} onClick={onClick} />
      <Timer seconds={seconds} />

      <SheetContainer onClick={onClickSheet} items={characters} />
      <EpisodeSheetContainer items={episodes} />
    </ContentPages>
  );
};
