import { Typography } from "@mui/material";
import styles from "./TitleMenu.modules.css";
import React from "react";

export const TitleMenu = ({ children, variant }) => {

  return (
    <Typography variant={variant} className={styles.title}>
      {children}
    </Typography>
  );
};
