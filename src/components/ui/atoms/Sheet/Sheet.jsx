import React from "react";
import styles from "./Sheet.module.css";

export const Sheet = ({ image, name, species, location ,onClick }) => {
  const BackgroundHead = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.center}>
      <div onClick={onClick} className={styles.property_card}>
        <div className={styles.property_image} style={BackgroundHead}></div>
        <div className={styles.property_description}>
          <h5> {name} </h5>
          <p>Species: {species}</p>
          <p>Location: {location.name}</p>
        </div>
      </div>
    </div>
  );
};
