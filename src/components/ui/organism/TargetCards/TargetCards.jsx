import { Grid } from "@mui/material";
import React from "react";
import { Card } from "../../atoms/Card/Card";

export const TargetCards = ({ onClick, disabled }) => {
  return (
    <Grid container spacing={3} sx={{ display: "flex" }}>
      <Grid item xs={6} md={3}>
        <Card
          disabled={disabled}
          onClick={() => onClick("Pack1")}
          titleCard={"Pack 1"}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          disabled={disabled}
          onClick={() => onClick("Pack2")}
          titleCard={"Pack 2"}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          disabled={disabled}
          onClick={() => onClick("Pack3")}
          titleCard={"Pack 3"}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Card
          disabled={disabled}
          onClick={() => onClick("Pack4")}
          titleCard={"Pack 4"}
        />
      </Grid>
    </Grid>
  );
};
