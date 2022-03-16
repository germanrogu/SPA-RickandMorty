import { Button, Tooltip } from "@mui/material";
import React from "react";
import styles from "./Sheet.module.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const Sheet = ({
  buttonAdd,
  image,
  name,
  species,
  location,
  onClick,
}) => {
  const BackgroundHead = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.center}>
      <div className={styles.property_card}>
        <div className={styles.property_image} style={BackgroundHead}>
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
        <div className={styles.property_description}>
          <h5> {name} </h5>
          <p>Species: {species}</p>
          <p>Location: {location.name}</p>
          <p>Category: {"Character"}</p>
        </div>
      </div>
    </div>
  );
};
