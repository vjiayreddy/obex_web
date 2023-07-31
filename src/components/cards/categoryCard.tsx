import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Typography } from "@mui/material";

const StyledCardWrapper = styled(Box)(({ theme }) => ({
  minHeight: 100,
  height: "250px",
  width: "200px",
  position: "relative",
  borderRadius: 10,
  overflow: "hidden",
  marginLeft: 10,
}));

const StyledCardOverly = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  overflow: "hidden",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));



interface CategoryCardProps {
  title: string;
  imgUrl?: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, imgUrl, onClick }: CategoryCardProps) => {
  return (
    <StyledCardWrapper onClick={onClick}>
      <Image
        alt={title}
        src={imgUrl}
        fill
        style={{ filter: `contrast(140%) brightness(0.6)` }}
        blurDataURL={imgUrl}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <StyledCardOverly>
        <Typography variant="subtitle1">{title}</Typography>
      </StyledCardOverly>
    </StyledCardWrapper>
  );
};

export default CategoryCard;
