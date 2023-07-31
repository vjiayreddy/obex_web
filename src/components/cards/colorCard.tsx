import React from "react";
import Box from "@mui/material/Box";
import { SxProps, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { shouldForwardProp } from "../utils";

interface StyledColorBoxProps {
  cardBgColor: string;
}

interface ColorCardProps {
  SxColorBoxProps?: SxProps;
  colorCode: string;
  colorName: string;
}

const StyledColorBox = styled(Box, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledColorBoxProps>(["cardBgColor"], prop),
})<StyledColorBoxProps>(({ cardBgColor }) => ({
  width: "100%",
  position: "relative",
  minHeight: 50,
  backgroundColor: cardBgColor,
  overflow: "hidden",
  marginBottom: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ColorCard = ({
  SxColorBoxProps,
  colorCode,
  colorName,
}: ColorCardProps) => {
  return (
    <>
      <StyledColorBox
        sx={SxColorBoxProps}
        cardBgColor={colorCode}
      ></StyledColorBox>
    </>
  );
};

export default ColorCard;
