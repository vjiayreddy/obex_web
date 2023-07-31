import React, { Fragment, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import SlickSlider from "react-slick";

const StyledProductGalleryViewSlider = styled(Box)(({ theme }) => ({
  position: "relative",
}));

const StyledThumbnails = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  width:50
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 450,
  backgroundColor: theme.palette.grey[200],
  position: "relative",
  overflow: "hidden",
}));

const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
};

const settingsThumbs = {
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: false,
  swipeToSlide: true,
  focusOnSelect: true,
  centerPadding: "10px",
  variableWidth: true,
  infinite: false,
};

interface ProductGalleryViewSliderProps {
  sliderImages: string[] | null;
  imageAlt?: string;
}

const ProductGalleryViewSlider = ({
  sliderImages,
  imageAlt,
}: ProductGalleryViewSliderProps) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [productViewSlider, setProductViewSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  useEffect(() => {
    setNav1(productViewSlider);
    setNav2(thumbnailSlider);
  });

  return (
    <StyledProductGalleryViewSlider>
      <SlickSlider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setProductViewSlider(slider)}
      >
        {sliderImages.map((slide, index) => (
          <div key={index}>
            <StyledMainBox>
              <Image
                alt={imageAlt + index}
                src={slide}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: `top center`,
                }}
                placeholder="blur"
                loading="lazy"
                blurDataURL={slide}
              />
            </StyledMainBox>
          </div>
        ))}
      </SlickSlider>
      <StyledThumbnails>
        <div className="product-thumbnail-slider-wrap">
          <SlickSlider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setThumbnailSlider(slider)}
          >
            {sliderImages.map((slide, index) => (
              <Box pr={1} key={index}>
                <Image
                  alt={imageAlt + index}
                  src={slide}
                  width={50}
                  height={50}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={slide}
                />
              </Box>
            ))}
          </SlickSlider>
        </div>
      </StyledThumbnails>
    </StyledProductGalleryViewSlider>
  );
};

export default ProductGalleryViewSlider;
