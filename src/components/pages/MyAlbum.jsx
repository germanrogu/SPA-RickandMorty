import { Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";
import { ButtonCustom } from "../ui/atoms/ButtonCustom/ButtonCustom";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { DetailDialog } from "../ui/molecules/DetailDialog/DetailDialog";
import { EpisodeSheetContainer } from "../ui/molecules/EpisodeSheetContainer/EpisodeSheetContainer";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";

export const MyAlbum = () => {
  const { albumArray, albumArrayEpisode } = useContext(AlbumContext);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [item, setItem] = useState({});
  const [type, setType] = useState("");

  const onClickSheet = (item, type) => {
    setOpenConfirmation(true);
    setItem(item);
    setType(type);
  };

  return (
    <ContentPages>
      <DetailDialog
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        title={"Description"}
        item={item}
        type={type}
      />
      <Divider sx={{ width: "100%", paddingBottom: "1.5rem" }}>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.8rem",
            fontWeight: "600",
            color: "#722f37",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
          }}
        >
          {"  Characters  "}
        </Typography>
      </Divider>

      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SheetContainer
          onClick={onClickSheet}
          items={albumArray.map((item) => item.character)}
        />

        <Divider sx={{ width: "100%" }}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#722f37",
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
            }}
          >
            {"  Episodes  "}
          </Typography>
        </Divider>

        <EpisodeSheetContainer
          onClick={onClickSheet}
          items={albumArrayEpisode.map((item) => item.character)}
        />
      </Grid>

      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#722f37",
          paddingTop: "2.5rem",
          paddingBottom: "1rem",
        }}
      >
        {albumArray.length > 0
          ? "These are the sheets you have"
          : "Empty Album"}
      </Typography>

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
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
