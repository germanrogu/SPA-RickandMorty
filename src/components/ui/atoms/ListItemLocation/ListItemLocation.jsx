import {
  Box,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";

export const ListItemLocation = ({
  itemsLocation,
  onClickPreviousLocation,
  onClickNextLocation,
  disabledPreviousLocation,
  disabledNextLocation,
}) => {
  return (
    <List sx={{ width: "100%", maxWidth: 680, bgcolor: "background.paper" }}>
      {itemsLocation.map((item) => (
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
                    {`Type: ${item.type} - `}
                  </Typography>
                  {`Dimension: ${item.dimension}`}
                </>
              }
            />
          </ListItem>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "0.9rem", color: "#96CF4C" }}
          >
            {`Id related characters`}
          </Typography>
          {item.residents.map((resident, index) => (
            <Typography
              key={index}
              component="span"
              sx={{ fontSize: "0.7rem" }}
            >
              {`Id: ${resident.split("/")[5]} - `}
            </Typography>
          ))}
          <Divider variant="inset" component="li" />
        </div>
      ))}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <ButtonCustom
            disabled={disabledPreviousLocation}
            onClick={onClickPreviousLocation}
          >
            Previous
          </ButtonCustom>
          <ButtonCustom
            disabled={disabledNextLocation}
            onClick={onClickNextLocation}
          >
            Next
          </ButtonCustom>
        </ButtonGroup>
      </Box>
    </List>
  );
};
