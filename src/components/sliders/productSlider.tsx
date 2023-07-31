import React, { Fragment } from "react";
import ReactSlickSlider from "react-slick";
import ProductCard from "../cards/productCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductSlider = () => {
  let sliderRef: any;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };

  const onClickNext = () => {
    sliderRef.slickNext();
  };
  const onClickPrev = () => {
    sliderRef.slickPrev();
  };

  return (
    <Fragment>
      <Grid mb={2} container>
        <Grid item xs={9}>
          <Typography variant="h6">Similar Products</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Grid item>
            <IconButton size="small" onClick={onClickPrev}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small" onClick={onClickNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <ReactSlickSlider ref={(c) => (sliderRef = c)} {...settings}>
        <div>
          <Box p={0.5}>
            <ProductCard
              title="Bold and black indo-western kurta set"
              price={1500}
              name="Bold and black indo-western kurta set"
              imgUrl="https://i.pinimg.com/236x/8a/ca/54/8aca540ee746b36c43301e358bb1c110.jpg"
            />
          </Box>
        </div>
        <div>
          <Box p={0.5}>
            <ProductCard
              title="Bold and black indo-western kurta set"
              price={1500}
              name="Bold and black indo-western kurta set"
              imgUrl="https://i.pinimg.com/236x/8a/ca/54/8aca540ee746b36c43301e358bb1c110.jpg"
            />
          </Box>
        </div>
        <div>
          <Box p={0.5}>
            <ProductCard
              title="Bold and black indo-western kurta set"
              price={1500}
              name="Bold and black indo-western kurta set"
              imgUrl="https://i.pinimg.com/236x/8a/ca/54/8aca540ee746b36c43301e358bb1c110.jpg"
            />
          </Box>
        </div>
      </ReactSlickSlider>
    </Fragment>
  );
};

export default ProductSlider;
