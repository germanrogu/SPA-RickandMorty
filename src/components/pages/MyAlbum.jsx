import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";
import { ButtonCustom } from "../ui/atoms/ButtonCustom/ButtonCustom";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";

export const MyAlbum = () => {
  const { albumArray } = useContext(AlbumContext);
  console.log(albumArray)
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

      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontSize: "1.2rem",
        }}
      >
        Empty album
      </Typography>
      <Link
        to={`/GetCards`}
        style={{
          display: "flex",
          textDecoration: "none",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonCustom>Go to Get cards</ButtonCustom>
      </Link>
    </ContentPages>
  );
};
