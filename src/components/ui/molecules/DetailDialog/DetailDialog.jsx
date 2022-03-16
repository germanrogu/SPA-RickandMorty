import { Dialog, DialogContent, Grid, IconButton, styled } from "@mui/material";
import styles from "./DetailDialog.module.css";
import React from "react";
import { TitleGeneralPopUp } from "../../atoms/TitleGeneralPopUp/TitleGeneralPopUp";
import CloseIcon from "@mui/icons-material/Close";
import { DescriptionText } from "../../atoms/DescriptionText/DescriptionText";

const DialogCustom = styled(Dialog)({
  "& .MuiPaper-root": {
    width: "25rem",
    borderRadius: " 20px",
  },
});

const DialogContentCustom = styled(DialogContent)({
  "&.MuiDialogContent-root": {
    marginTop: "1rem",
    overflow: "hidden",
  },
});

export const DetailDialog = ({
  open = false,
  onClose,
  title = "Description",
  item,
}) => {
  return (
    <>
      {Object.keys(item).length !== 0 && (
        <DialogCustom
          maxWidth={"md"}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
          open={open}
        >
          <div className={styles.general}>
            <Grid container>
              <Grid item xs={9} md={9}>
                <TitleGeneralPopUp children={title} variant={"h4"} />
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <IconButton onClick={onClose}>
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>

            <div className={styles.containerImg}>
              <img className={styles.image} src={item.image} alt={item.name} />
            </div>

            <DialogContentCustom>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <DescriptionText children={item.name} variant={"h6"} />
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <DescriptionText children={`Id: ${item.id}`} variant={"h6"} />
                </Grid>
              </Grid>

              <p>Type: {item.type}</p>
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
              <p>Category: {"Character"}</p>
            </DialogContentCustom>
          </div>
        </DialogCustom>
      )}
    </>
  );
};
