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
  backgroundSize: "cover",
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

const StyledCardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  minHeight: 150,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top,center",
}));

const StyledCardOverly = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  flexDirection: "column",
  background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 55%,rgba(0,0,0,0.50) 98%,rgba(0,0,0,0.65) 100%)`,
}));

type BasicCardType = {
  imageUrl: string;
  title: string;
  subTitle;
};

interface BasicImageAndInfoCard {
  data: BasicCardType;
}

const BasicImageAndInfoCard = ({ data }: BasicImageAndInfoCard) => {
  return (
    <Card>
      <StyledCardContainer sx={{ backgroundImage: `url(${data.imageUrl})` }}>
        <StyledCardOverly>
          <Box p={1}>
            <Typography variant="caption">500+ Attending</Typography>
          </Box>
        </StyledCardOverly>
      </StyledCardContainer>
      <Box p={1}>
        <StyledCardTitle variant="body1">{data.title}</StyledCardTitle>
        <Typography variant="caption">{data.subTitle}</Typography>
      </Box>
    </Card>
  );
};

export default BasicImageAndInfoCard;
