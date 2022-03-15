import { Typography } from "@mui/material";
import React from "react";


/**
 * Description text for different cards
 * @returns {React}
 */
export const DescriptionText = ({ children, variant }) => {
  return (
    <Typography style={{ fontWeight: "bold" }} variant={variant}>
      {children}
    </Typography>
  );
};
