import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import { BrandPartnerType } from "../../../apollo/hooks/useGetAllBrandPartners";

const StyledCardNote = styled(Typography)(({}) => ({
  minHeight: "40px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));

interface BrandPartnerCardProps {
  data: BrandPartnerType;
}

const BrandPartnerCard = ({ data }: BrandPartnerCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <img
              width={80}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jA6VL-UZYpgeTFL81yP7w04RWEygVgPuDQ&usqp=CAU"
            />
          </Grid>
          <Grid pl={2} item xs>
            <Typography gutterBottom variant="body1">{data.title}</Typography>
            <Box>
              <StyledCardNote variant="caption">{data.note}</StyledCardNote>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BrandPartnerCard;
