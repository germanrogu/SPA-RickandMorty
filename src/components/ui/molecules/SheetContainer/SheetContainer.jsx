import { Grid } from "@mui/material";
import React from "react";
import { Sheet } from "../../atoms/Sheet/Sheet";

export const SheetContainer = ({ items, onClick, buttonAdd }) => {
  const onClickChange = (item)=>{
    onClick(item,'character')
  }
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item xs={12} md={3} key={item.id}>
          <Sheet
            buttonAdd={buttonAdd}
            image={item.image}
            name={item.name}
            species={item.species}
            location={item.location}
            onClick={() => onClickChange(item)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
