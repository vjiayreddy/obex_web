import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

const StyledCardImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 130,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "top,center",
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  minHeight: "20px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
  fontSize: theme.spacing(1.4),
}));

const StyledCardSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
}));

const StyledCardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "top,center",
}));

type BasicCardType = {
  imageUrl: string;
  title: string;
  subTitle;
};

interface BasicImageAndInfoCard {
  data: BasicCardType;
}

const DealsAndPackagesCard = ({ data }: BasicImageAndInfoCard) => {
  return (
    <Card>
      <StyledCardContainer>
        <StyledCardImage sx={{ backgroundImage: `url(${data.imageUrl})` }} />
      </StyledCardContainer>
      <Box p={1}>
        <StyledCardTitle variant="body1">{data.title}</StyledCardTitle>
        <StyledCardSubtitle variant="caption">
          {data.subTitle}
        </StyledCardSubtitle>
      </Box>
    </Card>
  );
};

export default DealsAndPackagesCard;
