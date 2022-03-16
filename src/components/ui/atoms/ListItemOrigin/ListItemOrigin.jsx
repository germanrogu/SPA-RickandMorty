import React from "react";
import {
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";

export const ListItemOrigin = ({
  itemOrigin,
  onClickPrevious,
  onClickNext,
  disabledPrevious,
  disabledNext,
}) => {
  return (
    <List sx={{ width: "100%", maxWidth: 420, bgcolor: "background.paper" }}>
      {itemOrigin.map((item) => (
        <div key={item.id}>
          <ListItem alignItems="flex-start">
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
