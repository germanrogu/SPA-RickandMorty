import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { TimeCardContext } from "../../context/TimeCardContext";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { Timer } from "../ui/atoms/Timer/Timer";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";
import { TargetCards } from "../ui/organism/TargetCards/TargetCards";
import axios from "axios";
import { EpisodeSheetContainer } from "../ui/molecules/EpisodeSheetContainer/EpisodeSheetContainer";
import { AlbumContext } from "../../context/AlbumContext";
import Swal from "sweetalert2";

export const GetCards = () => {
  const { activeTimer, seconds, setClicked, disabled } =
    useContext(TimeCardContext);
  const { addToAlbum, isInAlbum, setRepeatedCharacter } =
    useContext(AlbumContext);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

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

  const alertToConfirm = (icon, title, textAlert) => {
    return Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${textAlert}`,
      confirmButtonText: icon === "warning" ? "Dismiss" : "OK",
      confirmButtonColor: "#96CF4C",
    }).then((result) => {
      if (result.isConfirmed) {
        setRepeatedCharacter(false);
      }
    });
  };

  const onClickSheet = (item) => {
    if (isInAlbum(item.id)) {
      alertToConfirm(
        "warning",
        "Oops... ",
        "This card is repeated, you already have it in your album"
      );
    } else {
      addToAlbum(item);
      alertToConfirm(
        "success",
        "Your work has been saved",
        "Card successfully added to your album"
      );
    }
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
