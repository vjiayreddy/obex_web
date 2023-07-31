import { SxProps, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { shouldForwardProp } from "../utils";

export interface StyledImageBoxProps {
  cardWidth?: string | number;
  cardHeight?: string | number;
  cardImage?: string;
}

export interface StyledImageAndLabelCardProps {
  cardImageUrl?: string;
  imageBoxSx?: SxProps;
  cardWidth?: string | number;
  cardHeight?: string | number;
  cardTitle?: string;
}

const StyledImageAndLabelCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledImageBox = styled(Box, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledImageBoxProps>(
      ["cardWidth", "cardHeight", "cardImage"],
      prop
    ),
})<StyledImageBoxProps>(({ theme, cardWidth, cardHeight, cardImage }) => ({
  width: cardWidth ? cardWidth : theme.spacing(13.3),
  height: cardHeight ? cardHeight : theme.spacing(15),
  backgroundColor: theme.palette.grey[200],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  backgroundSize: "cover",
  position: "relative",
  overflow: "hidden",
  backgroundImage: cardImage ? `url(${cardImage})` : null,
  borderRadius: theme.spacing(1),
}));

const StyledImageBoxOverly = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 55%,rgba(0,0,0,0.50) 98%,rgba(0,0,0,0.65) 100%)`,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  padding: theme.spacing(1),
  color: theme.palette.common.white,
}));

const ImageAndLabelCard = ({
  cardImageUrl,
  imageBoxSx,
  cardWidth,
  cardHeight,
  cardTitle,
}: StyledImageAndLabelCardProps) => {
  return (
    <StyledImageAndLabelCard>
      <StyledImageBox
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        cardImage={cardImageUrl}
        sx={imageBoxSx}
      >
        <StyledImageBoxOverly>
          <Typography variant="caption">{cardTitle}</Typography>
        </StyledImageBoxOverly>
      </StyledImageBox>
    </StyledImageAndLabelCard>
  );
};
export default ImageAndLabelCard;
