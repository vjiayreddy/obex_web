import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DefaultButton from "../../components/buttons/defaultButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DealsAndPackagesCard from "../../components/cards/dealsAndPackagesCard";
import SectionHeading from "./sectionHeading";

type DealsAndPackagesType = {
  _id: string;
  imgUrl: string;
  title: string;
  sharedBy: string;
};

interface TopDealsAndPackagesProps {
  data: DealsAndPackagesType[];
  sliderWidth: string | number;
}

const TopDealsAndPackages = ({
  data,
  sliderWidth,
}: TopDealsAndPackagesProps) => {
  return (
    <Box pl={1} pt={2} pr={1} mb={2}>
      <SectionHeading title="Top Deals and Packages" btnName="See All" />
      <Grid container alignItems="center">
        <Grid pl={1} item xs={12}>
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item) => (
              <SwiperSlide key={item._id} style={{ width: sliderWidth }}>
                <DealsAndPackagesCard
                  data={{
                    imageUrl: item.imgUrl,
                    title: item.title,
                    subTitle: item.sharedBy,
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

export default TopDealsAndPackages;
