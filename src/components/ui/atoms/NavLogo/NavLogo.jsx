import React from "react";


import { Link } from "react-router-dom";

export const NavLogo = ({ src }) => {
  return (
    <Link to={"/GetCards"} style={{ display: "flex" }}>
      <img src={src} style={{ maxWidth: 120}} alt="logo"  />
    </Link>
  );
};
