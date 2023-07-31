import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BrandPartnerType } from "../../../apollo/hooks/useGetAllBrandPartners";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DefaultButton from "../buttons/defaultButton";

interface SwiperSliderProps {
  data: BrandPartnerType[];
  component: React.ReactNode;
  sliderWidth: string | number;
}

const SwiperSlider = ({ data, component, sliderWidth }: SwiperSliderProps) => {
  return (
    <Fragment>
      <Box mt={1}>
        <Grid container>
          <Grid p={1} item xs>
            <Typography gutterBottom variant="h4">
              Brand Partners
            </Typography>
          </Grid>
          <Grid item p={1}>
            <DefaultButton variant="text" id="btn-view-all" label="View All" />
          </Grid>
          <Grid pl={1} item xs={12}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              className="mySwiper"
            >
              {data.map((brand) => (
                <SwiperSlide key={brand._id} style={{ width: sliderWidth }}>
                  {component}
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default SwiperSlider;
