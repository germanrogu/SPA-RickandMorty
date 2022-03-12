import React from "react";
import { Button, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  "&.MuiButton-root": {
    textTransform: "none",
    color: "#45291D",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    margin: "0.8rem 0 ",
    backgroundColor: "#F1E14B",
  },
  "&.MuiButton-root:hover": {
    backgroundColor: alpha("#F1E14B", 0.5),
    color: "#45291D",
  },
});

/**
 * Component ButtonCustom
 */
export const ButtonCustom = ({
  children,
  type = "button",
  backgroundColor,
  onClick,
}) => {
  return (
    <CustomButton
      style={{ backgroundColor }}
      fullWidth
      type={type}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
};
