import { Button, Tooltip } from "@mui/material";
import React from "react";
import styles from "./EpisodeSheet.module.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const EpisodeSheet = ({
  buttonAdd,
  onClick,
  name,
  episode,
  air_date,
}) => {
  return (
    <div className={styles.center}>
      <div className={styles.property_card}>
        <div className={styles.property_description}>
          <div className={styles.buttonAdd}>
            <Tooltip title={buttonAdd === "card" ? "Add" : "View"}>
              <Button
                onClick={onClick}
                disableElevation={true}
                size="medium"
                style={{
                  borderRadius: "8px",
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "#DBF227",
                  textTransform: "none",
                }}
                startIcon={<AddBoxIcon />}
              >
                {buttonAdd === "card" ? "Add" : "View"}
              </Button>
            </Tooltip>
          </div>
          <h5> {name} </h5>
          <p>Episode: {episode}</p>
          <p>Air date: {air_date}</p>
          <p>Category: {"Episode"}</p>
        </div>
      </div>
    </div>
  );
};
