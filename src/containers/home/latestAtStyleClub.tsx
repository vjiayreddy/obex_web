import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DefaultButton from "../../components/buttons/defaultButton";
import { Swiper, SwiperSlide } from "swiper/react";
import StyleClubCard from "../../components/cards/styleClubCard";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionHeading from "./sectionHeading";

type StyleClubType = {
  _id: string;
  imgUrl: string;
  title: string;
  address: string;
};

interface LatestAtStyleClubProps {
  data: StyleClubType[];
  sliderWidth: string | number;
}

const LatestAtStyleClub = ({ data, sliderWidth }: LatestAtStyleClubProps) => {
  return (
    <Box pl={1} pt={2} pr={1}>
      <SectionHeading title="Latest at Style Club" btnName="See All" />
      <Grid container alignItems="center">
        <Grid pl={1} item xs={12}>
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item) => (
              <SwiperSlide key={item._id} style={{ width: sliderWidth }}>
                <StyleClubCard
                  data={{
                    imageUrl: item.imgUrl,
                    title: item.title,
                    subTitle: item.address,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestAtStyleClub;
