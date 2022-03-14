import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";
import { ButtonCustom } from "../ui/atoms/ButtonCustom/ButtonCustom";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { Sheet } from "../ui/atoms/Sheet/Sheet";

export const MyAlbum = () => {
  const { albumArray } = useContext(AlbumContext);

  return (
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "1.3rem",
          paddingBottom: "1.8rem",
        }}
      >
        {" My Album "}
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {albumArray.map((item) => (
          <Grid item xs={12} md={3} key={item.character.id}>
            <Sheet
              image={item.character.image}
              name={item.character.name}
              species={item.character.species}
              location={item.character.location}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontSize: "1.2rem",
        }}
      >
        {albumArray.length > 0
          ? "These are the sheets you have"
          : "Empty Album"}
      </Typography>

      <Grid sx={{ display: "flex",justifyContent: "center"}}>
        <Link
          to={`/GetCards`}
          style={{
            display: "flex",
            textDecoration: "none",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ButtonCustom>Go to get more cards</ButtonCustom>
        </Link>
      </Grid>
    </ContentPages>
  );
};
