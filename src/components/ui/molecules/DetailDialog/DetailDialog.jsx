import { Dialog, DialogContent, Grid, IconButton, styled } from "@mui/material";
import styles from "./DetailDialog.module.css";
import React from "react";
import { TitleGeneralPopUp } from "../../atoms/TitleGeneralPopUp/TitleGeneralPopUp";
import CloseIcon from "@mui/icons-material/Close";
import { DescriptionText } from "../../atoms/DescriptionText/DescriptionText";

const DialogCustom = styled(Dialog)({
  root: {
    "& .MuiDialog-paper": {
      borderRadius: " 15px",
      borderColor: "red",
    },
  },
});

const DialogContentCustom = styled(DialogContent)({
  root: {
    "&.MuiDialogContent-root": {
      marginTop: "1rem",
      overflow: "hidden",
    },
  },
});

// TODO: Revisar como llega el item para mostrarlo

export const DetailDialog = ({
  open = false,
  onClose,
  title = "Description",
  msgError = "Here you can see the full description",
  item,
}) => {
  console.log(item);
  return (
    <DialogCustom
      maxWidth={"md"}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      open={open}
    >
      <div className={styles.general}>
        <Grid container className={styles.dos}>
          <TitleGeneralPopUp children={title} variant={"h4"} />
          <div className={styles.close}>
            <IconButton onClick={onClose}>
              <CloseIcon color="secondary" />
            </IconButton>
          </div>
        </Grid>

        <DialogContentCustom>
          <DescriptionText children={msgError} variant={"h6"} />
          {/* {item.length>0 && (
            <>
              <h5> {item.name} </h5>
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
              <p>Category: {"Character"}</p>
            </>
          )} */}
        </DialogContentCustom>
      </div>
    </DialogCustom>
  );
};
