import {
  Avatar,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import React from "react";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";

export const ListItemCustom = ({
  items,
  onClickPrevious,
  onClickNext,
  disabledPrevious,
  disabledNext,
}) => {
  return (
    <List sx={{ width: "100%", maxWidth: 420, bgcolor: "background.paper" }}>
      {items.map((item) => (
        <div key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{ fontWeight: "bold" }}
              primary={item.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`Status: ${item.status} - `}
                  </Typography>
                  {`Specie: ${item.species} - Gender: ${item.gender} `}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <ButtonCustom disabled={disabledPrevious} onClick={onClickPrevious}>
            Previous
          </ButtonCustom>
          <ButtonCustom disabled={disabledNext} onClick={onClickNext}>
            Next
          </ButtonCustom>
        </ButtonGroup>
      </Box>
    </List>
  );
};
