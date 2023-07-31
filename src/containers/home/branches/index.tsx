import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SectionHeading from "../sectionHeading";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const StyledMainWrapper = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.secondary.main,
}));

const StyledImageWrapper = styled(Box)(({ theme }) => ({}));
const HomeBranches = () => {
  return (
    <Box mt={3}>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeading title="Branches" btnName="More" />
        </Grid>
        <Grid item mt={2} xs={12}>
          <Swiper slidesPerView={"auto"} spaceBetween={10}>
            <SwiperSlide>
              <StyledMainWrapper p={1}>
                <Grid container columnSpacing={2} alignItems="stretch">
                  <Grid item xs={5}>
                    <StyledImageWrapper>
                      <img width={"100%"} src="/assets/images/adidas.png" />
                    </StyledImageWrapper>
                  </Grid>
                  <Grid item xs={7}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Adidas Company</Typography>
                      <Typography variant="body2">
                        Adidas AG is a German athletic apparel and footwear
                        corporation...
                      </Typography>
                    </Grid>
                    <Grid mt={1} item xs={12}>
                        <Button size="small">Shop Now</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </StyledMainWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <StyledMainWrapper p={1}>
                <Grid container columnSpacing={2} alignItems="stretch">
                  <Grid item xs={5}>
                    <StyledImageWrapper>
                      <img width={"100%"} src="/assets/images/us-polo.png" />
                    </StyledImageWrapper>
                  </Grid>
                  <Grid item xs={7}>
                    <Grid item xs={12}>
                      <Typography variant="h6">US Polo Company</Typography>
                      <Typography variant="body2">
                        Us Polo AG is a German athletic apparel and footwear
                        corporation...
                      </Typography>
                    </Grid>
                    <Grid mt={1} item xs={12}>
                        <Button size="small">Shop Now</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </StyledMainWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <StyledMainWrapper p={1}>
                <Grid container columnSpacing={2} alignItems="stretch">
                  <Grid item xs={5}>
                    <StyledImageWrapper>
                      <img width={"100%"} src="/assets/images/roadstar.png" />
                    </StyledImageWrapper>
                  </Grid>
                  <Grid item xs={7}>
                    <Grid item xs={12}>
                      <Typography variant="h6">RoadStar</Typography>
                      <Typography variant="body2">
                        Road Star AG is a German athletic apparel and footwear
                        corporation...
                      </Typography>
                    </Grid>
                    <Grid mt={1} item xs={12}>
                        <Button size="small">Shop Now</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </StyledMainWrapper>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeBranches;
