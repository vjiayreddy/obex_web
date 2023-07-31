import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const StyledBanner = styled(Box)(({ theme }) => ({
  height: 450,
  backgroundColor: theme.palette.grey[100],
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 20,
  boxSizing: "border-box",
}));

console.count("HomeBanner");
const HomeBanner = () => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={10}>
      <SwiperSlide>
        <StyledBanner>
          <Grid container flexDirection="column">
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h3">Custom OutFits Crafted for you</Typography>
            </Grid>
          </Grid>
        </StyledBanner>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
