import React from "react";
import styles from "./EpisodeSheet.module.css";

export const EpisodeSheet = ({ name, episode, air_date }) => {
  return (
    <div className={styles.center}>
      <div className={styles.property_card}>
        <div className={styles.property_description}>
          <h5> {name} </h5>
          <p>Episode: {episode}</p>
          <p>Air date: {air_date}</p>
          <p>Category: {'Episode'}</p>
        </div>
      </div>
    </div>
  );
};
