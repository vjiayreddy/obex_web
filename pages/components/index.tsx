import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  height: 700,
  width: "100%",
  padding: 10,
}));

const Components = () => {
  return (
    <StyledImageWrapper>
      <Slider {...settings}>
        <div>
          <TransformWrapper>
            <TransformComponent>
              <img
                width={"100%"}
                src="https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/602e32dd93d7883f48f15b05_0.jpg"
                alt="test"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div>
          <TransformWrapper>
            <TransformComponent>
              <img
                width={"100%"}
                src="https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/602e32dd93d7883f48f15b05_1.jpg"
                alt="test"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div>
          <TransformWrapper>
            <TransformComponent>
              <img
                width={"100%"}
                src="https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFProducts_2.0/Shirt/602e32dd93d7883f48f15b05_2.jpg"
                alt="test"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </Slider>
    </StyledImageWrapper>
  );
};

export default Components;
