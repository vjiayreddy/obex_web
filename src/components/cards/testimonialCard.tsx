import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import { Typography } from "@mui/material";

const StyledBoxWrapper = styled(Card)(({ theme }) => ({
  width: 230,
  height: 300,
  marginRight: 15,
  borderRadius: 10,
  marginBottom: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "red",
  },
}));

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: 100,
  overflow: "hidden",
  position: "relative",
  border:`3px solid ${theme.palette.common.white}`,
  boxShadow: `0px 7px 18px 0px rgba(0,0,0,0.1)`

}));

const StyledTestimonialContent = styled(Typography)(({ theme }) => ({
  minHeight: theme.spacing(4),
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
}));

interface TestimonialCardProps {
  data:any
}

const TestimonialCard = ({data}:TestimonialCardProps) => {
  return (
    <StyledBoxWrapper>

      <Box p={2}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Grid item xs={12}>
            <StyledImageWrapper>
              <Image
                fill
                style={{
                  objectFit:"cover"
                }}
                src={data?.image}
                alt={data?.name}
                blurDataURL={data?.image}
              />
            </StyledImageWrapper>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="subtitle1">
             {data?.name}
            </Typography>
            <StyledTestimonialContent align="center" gutterBottom variant="caption">
            {data?.content}
            </StyledTestimonialContent>
          </Grid>
          <Grid item xs={12}>
            Google Rating
          </Grid>
        </Grid>
      </Box>
    </StyledBoxWrapper>
  );
};

export default TestimonialCard;
