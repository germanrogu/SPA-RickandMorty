import React from "react";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";
import styles from "./Card.module.css";

export const Card = ({ titleCard }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{titleCard}</h2>
        <ButtonCustom>Open</ButtonCustom>
      </div>
    </div>
  );
};
