import { Grid } from "@mui/material";
import React from "react";
import { EpisodeSheet } from "../../atoms/EpisodeSheet/EpisodeSheet";

export const EpisodeSheetContainer = ({ items, buttonAdd, onClick }) => {
  const onClickChange = (item) => {
    onClick(item, "episode");
  };
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item xs={12} md={3} key={item.id}>
          <EpisodeSheet
            buttonAdd={buttonAdd}
            onClick={() => onClickChange(item)}
            name={item.name}
            episode={item.episode}
            air_date={item.air_date}
          />
        </Grid>
      ))}
    </Grid>
  );
};
