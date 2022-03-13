import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { TitleMenu } from "../TitleMenu/TitleMenu";
import { styled } from "@mui/material/styles";

const StyledMenu = styled(Menu)({
  paper: {
    borderRadius: " 0px",
    border: "1px solid #722f37",
  },
});

export const MenuNav = ({ anchorEl, open, onClose, items }) => {
  return (
    <StyledMenu
      elevation={0}
      getcontentanchorel={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id="menu-appbar"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={onClose}
    >
      {items.map((item) => (
        <Link
          to={`/${item.split(" ").join("")}`}
          style={{
            display: "flex",
            textDecoration: "none",
            color: "#722f37",
          }}
          key={item}
        >
          <MenuItem key={item} onClick={onClose}>
            <TitleMenu
              textAlign="center"
              children={item}
              variant={"subtitle1"}
            />
          </MenuItem>
        </Link>
      ))}
    </StyledMenu>
  );
};
