import { Typography } from "@mui/material";
import styles from "./TitleGeneralPopUp.module.css";

/**
 * Title General pop Up
 * @returns {React}
 */
export const TitleGeneralPopUp = ({ children, variant }) => {
  return (
    <Typography variant={variant} className={styles.title}>
      {children}
    </Typography>
  );
};
