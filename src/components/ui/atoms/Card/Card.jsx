import React from "react";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";
import styles from "./Card.module.css";
import rockAlbum from '../../../../img/FondoGif.gif'

export const Card = ({ titleCard, onClick, disabled }) => {
  const BackgroundHead = {
    backgroundImage: `url(${rockAlbum})`,
    
  };

  return (
    <div className={styles.container} style={BackgroundHead}>
      <div className={styles.content}>
        <h2>{titleCard}</h2>
        <ButtonCustom disabled={disabled} onClick={onClick}>
          Open
        </ButtonCustom>
      </div>
    </div>
  );
};
