import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";

interface TabImageIconComponentProps {
  alt: string;
  image: string;
  iconHeight: number;
  iconWidth: number;
  [x: string]: any;
}

const StyledTabImageIconBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 5,
  overflow: "hidden",
}));

const StyledTabImage = styled(Image)(({ theme }) => ({
  //borderRadius: 5,
}));

const ImageIconComponent: React.FC<TabImageIconComponentProps> = ({
  alt,
  image,
  iconHeight,
  iconWidth,
  ...props
}) => {
  return (
    <StyledTabImageIconBox {...props}>
      <StyledTabImage
        alt={alt}
        src={image}
        width={iconWidth}
        height={iconHeight}
       // blurDataURL={image}
        //placeholder="blur"
      />
    </StyledTabImageIconBox>
  );
};

export default ImageIconComponent;
