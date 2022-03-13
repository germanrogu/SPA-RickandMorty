import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TimeCardContext } from "../../context/TimeCardContext";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { Timer } from "../ui/atoms/Timer/Timer";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";
import { TargetCards } from "../ui/organism/TargetCards/TargetCards";
import axios from "axios";

export const GetCards = () => {
  const { activeTimer, resetTimer, seconds } = useContext(TimeCardContext);
  const [disabled, setDisabled] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onClick = (target) => {
    console.log("Cual", target);
    activeTimer();
    setClicked(true);
    fetchCharacters(url)
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



  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

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


  return (
    <>
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
        <TargetCards
          disabledB1={disabled}
          disabledB2={disabled}
          disabledB3={disabled}
          disabledB4={disabled}
          onClick={onClick}
        />
        <Timer seconds={seconds} />


        <SheetContainer items={characters}/>
      </ContentPages>
    </>
  );
};
