import { Grid } from "@mui/material";
import React from "react";
import { Card } from "../../atoms/Card/Card";

export const TargetCards = ({
  onClick,
  disabledB1,
  disabledB2,
  disabledB3,
  disabledB4,
}) => {
  return (
    <Grid container spacing={3} sx={{ display: "flex" }}>
      <Grid item xs={12} md={3}>
        <Card
          disabled={disabledB1}
          onClick={() => onClick("Pack1")}
          titleCard={"Pack 1"}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          disabled={disabledB2}
          onClick={() => onClick("Pack2")}
          titleCard={"Pack 2"}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          disabled={disabledB3}
          onClick={() => onClick("Pack3")}
          titleCard={"Pack 3"}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          disabled={disabledB4}
          onClick={() => onClick("Pack4")}
          titleCard={"Pack 4"}
        />
      </Grid>
    </Grid>
  );
};
