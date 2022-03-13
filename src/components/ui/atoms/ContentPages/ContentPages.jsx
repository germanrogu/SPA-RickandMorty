import styles from "./ContentPages.module.css";
import { CssBaseline } from "@mui/material";

export const ContentPages = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <main className={styles.content}>{children}</main>
    </>
  );
};
