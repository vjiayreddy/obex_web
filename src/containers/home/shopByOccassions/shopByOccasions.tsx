import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CategoryCard from "../../../components/cards/categoryCard";
import { PRODUCT_CATEGORIES, THEME_MODE } from "../../../utils/constants";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material/styles";

const ShopByOccasions = () => {
  const theme = useTheme();
  return (
    <Box mt={6} mb={6}>
      <Grid container flexDirection="column" spacing={2}>
        <Grid mb={3} item xs={12}>
          <Typography textAlign="center" variant="h4">
            Shop by Occasion
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Marquee
            direction="right"
            gradient={true}
            gradientColor={
              theme.palette.mode === THEME_MODE.LIGHT ? [255, 255, 255] : [18, 18, 18]
            }
            pauseOnHover={true}
          >
            {PRODUCT_CATEGORIES.map((item, index) => (
              <CategoryCard
                key={index}
                title={item.category}
                imgUrl={item.image}
              />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopByOccasions;
