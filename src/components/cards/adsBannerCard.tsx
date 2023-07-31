import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import { shouldForwardProp } from "../utils";

type flexModes =
  | "top-left"
  | "top-right"
  | "center"
  | "center-left"
  | "center-right"
  | "bottom-left"
  | "bottom-right";

interface CommonProps {
  cardWidth?: string | number;
  cardHeight?: string | number;
  cardBgImageUrl?: string;
  cardBgImageBrightness?: string | number;
}
interface StyledAdsBannerCardProps extends CommonProps {}
interface StyledAdsBannerCardContent {
  flexMode: flexModes;
}
export interface AdsBannerCardProps extends CommonProps {
  component: React.ReactNode;
  flexMode: flexModes;
}

const StyledAdsBannerCard = styled(Box, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledAdsBannerCardProps>(
      ["cardWidth", "cardHeight", "cardBgImageUrl", "cardBgImageBrightness"],
      prop
    ),
})<StyledAdsBannerCardProps>(({ theme, ...props }) => ({
  position: "relative",
  width: props.cardWidth || 250,
  height: props.cardHeight || 300,
  ...(props.cardBgImageUrl && {
    backgroundImage: `url(${props.cardBgImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundOrigin: "top center",
    ...(props.cardBgImageBrightness && {
      filter: `brightness(${props.cardBgImageBrightness})`,
    }),
  }),
}));

const StyledAdsBannerCardContent = styled(Box, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledAdsBannerCardContent>(["flexMode"], prop),
})<StyledAdsBannerCardContent>(({ flexMode }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection:"column",
  zIndex: 1,
  padding: 10,
  ...(flexMode === "center" && {
    alignItems: "center",
    justifyContent: "center",
  }),
  ...(flexMode === "top-left" && {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }),
}));

const AdsBannerCard = ({
  component,
  cardBgImageBrightness = "0.8",
  flexMode,
  ...props
}: AdsBannerCardProps) => {
  return (
    <StyledAdsBannerCard
      cardBgImageBrightness={cardBgImageBrightness}
      {...props}
    >
      <StyledAdsBannerCardContent flexMode={flexMode}>
        {component}
      </StyledAdsBannerCardContent>
    </StyledAdsBannerCard>
  );
};

export default AdsBannerCard;
