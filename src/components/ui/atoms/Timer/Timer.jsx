import { Typography } from "@mui/material";
import React from "react";

export const Timer = ({ minutes = 0, seconds }) => {
  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#722f37",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          {"Open a pack"}
        </Typography>
      ) : (
        <>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#722f37",
              paddingTop: "2rem",
              paddingBottom: "0.5rem",
            }}
          >
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "#722f37",
              paddingBottom: "2rem",
            }}
          >
            You can open another pack in 60 seconds
          </Typography>
        </>
      )}
    </>
  );
};
