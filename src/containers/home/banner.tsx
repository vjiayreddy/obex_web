import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const StyleBannerBox = styled(Box)(({ theme }) => ({}));

const StyledBannerCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.grey[900],
  borderRadius: 10,
}));

const AdsBanner = () => {
  return (
    <StyleBannerBox>
      <Swiper slidesPerView={"auto"}  spaceBetween={10}>
        <SwiperSlide>
          <StyledBannerCard sx={{backgroundColor:"red"}}>
            <Grid item container pl={2} pr={2}>
              <Grid item xs={12}>
                <Typography variant="h3" align="left">
                  UPTO
                </Typography>
                <Typography variant="h3" align="left">
                  60% OFF
                </Typography>
                <Typography variant="body1" align="left">
                  Further Reductions
                </Typography>
                <Box mt={1}>
                  <Button>Shop Now</Button>
                </Box>
              </Grid>
            </Grid>
          </StyledBannerCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledBannerCard>
            <Grid
              item
              container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Grid item>
                  <Typography gutterBottom variant="h4" align="center">
                    Fashion Sales
                  </Typography>
                  <Typography variant="body1" align="center">
                    50% Flat Discount
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </StyledBannerCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledBannerCard>
            <Grid
              item
              container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Grid item>
                  <Typography gutterBottom variant="h4" align="center">
                    Summer Fashion
                  </Typography>
                  <Typography variant="body1" align="center">
                    20% Flat Discount
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </StyledBannerCard>
        </SwiperSlide>
      </Swiper>
    </StyleBannerBox>
  );
};

export default AdsBanner;
