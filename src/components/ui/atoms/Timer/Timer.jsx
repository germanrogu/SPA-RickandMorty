import { Typography } from "@mui/material";
import React from "react";

export const Timer = ({ minutes = 0, seconds }) => {
  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#722f37",
            paddingTop: "1.3rem",
            paddingBottom: "1.3rem",
          }}
        >
          {"Open a pack"}
        </Typography>
      ) : (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#722f37",
            paddingTop: "1.3rem",
            paddingBottom: "1.3rem",
          }}
        >
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Typography>
      )}
    </div>
  );
};
