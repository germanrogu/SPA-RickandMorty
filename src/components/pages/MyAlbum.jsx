import { Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";
import { ButtonCustom } from "../ui/atoms/ButtonCustom/ButtonCustom";
import { ContentPages } from "../ui/atoms/ContentPages/ContentPages";
import { DetailDialog } from "../ui/molecules/DetailDialog/DetailDialog";
import { SheetContainer } from "../ui/molecules/SheetContainer/SheetContainer";

export const MyAlbum = () => {
  const { albumArray } = useContext(AlbumContext);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [item, setItem] = useState({});

  const onClickSheet = (item) => {
    setOpenConfirmation(true);
    setItem(item);
  };

  return (
    <ContentPages>
      <DetailDialog
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        title={"Description"}
        msgError={"Here you can see the full description"}
        item={item}
      />
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
        <SheetContainer
          onClick={onClickSheet}
          items={albumArray.map((item) => item.character)}
        />
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
