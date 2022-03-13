import { Grid } from "@mui/material";
import React from "react";
import { EpisodeSheet } from "../../atoms/EpisodeSheet/EpisodeSheet";

export const EpisodeSheetContainer = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item xs={12} md={3} key={item.id}>
          <EpisodeSheet
            name={item.name}
            episode={item.episode}
            air_date={item.air_date}
          />
        </Grid>
      ))}
    </Grid>
  );
};
