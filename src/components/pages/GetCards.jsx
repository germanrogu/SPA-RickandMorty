import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { TimeCardContext } from "../../context/TimeCardContext";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { Timer } from "../ui/atoms/Timer/Timer";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";
import { TargetCards } from "../ui/organism/TargetCards/TargetCards";
import axios from "axios";
import { EpisodeSheetContainer } from "../ui/molecules/EpisodeSheetContainer/EpisodeSheetContainer";
import { AlbumContext } from "../../context/AlbumContext";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const GetCards = () => {
  const { activeTimer, seconds, setClicked, disabled } =
    useContext(TimeCardContext);
  const { addToAlbum, isInAlbum } = useContext(AlbumContext);

  const [characters, setCharacters] = useLocalStorage([], "charactersPack");
  const [episodes, setEpisodes] = useLocalStorage([], "episodesPack");

  const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  };

  let url = `https://rickandmortyapi.com/api/character/${randomNumber(
    826
  )},${randomNumber(826)},${randomNumber(826)},${randomNumber(826)}`;
  let urlEpisodes = `https://rickandmortyapi.com/api/episode/${randomNumber(
    51
  )}`;

  const fetch = () => {
    const requestOne = axios.get(url);
    const requestTwo = axios.get(urlEpisodes);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setCharacters(responseOne.data);
          setEpisodes([responseTwo.data]);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  };

  const onClick = (target) => {
    activeTimer();
    setClicked(true);
    fetch();
  };

  const alertToConfirm = (icon, title, textAlert) => {
    return Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${textAlert}`,
      confirmButtonText: icon === "warning" ? "Dismiss" : "OK",
      confirmButtonColor: "#96CF4C",
    });
  };

  const onClickSheet = (item, type) => {
    if (isInAlbum(item.id, type)) {
      alertToConfirm(
        "warning",
        "Oops... ",
        "This card is repeated, you already have it in your album"
      );
    } else {
      addToAlbum(item, type);
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

      <SheetContainer
        buttonAdd={"card"}
        onClick={onClickSheet}
        items={characters}
      />
      <EpisodeSheetContainer
        buttonAdd={"card"}
        onClick={onClickSheet}
        items={episodes}
      />
    </ContentPages>
  );
};
