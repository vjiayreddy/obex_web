import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SectionHeading from "../sectionHeading";
import TopSellingCard from "../../../components/cards/topSellingCard";

const StyledMainWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
}));

const TopSellingProducts = () => {
  return (
    <StyledMainWrapper>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeading title="Top Selling Products" btnName="See All" />
        </Grid>
        <Grid item mt={2} xs={12} container columnSpacing={1}>
          <Grid item xs={6}>
            <TopSellingCard/>
          </Grid>
          <Grid item xs={6}>
            <TopSellingCard/>
          </Grid>
        </Grid>
      </Grid>
    </StyledMainWrapper>
  );
};

export default TopSellingProducts;
