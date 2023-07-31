import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { servedInfoContent } from "../../../utils/constants";
import ServedCard from "../../../components/cards/servedCard";
import { styled } from "@mui/material/styles";

const StyledHomeInfoSectionWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(15)} ${theme.spacing(20)} ${theme.spacing(
    15
  )} ${theme.spacing(20)}`,
}));

const HomeInfoSection = () => {
  return (
    <div className="shop-product-slider">
      <StyledHomeInfoSectionWrapper>
        <Box mb={5}>
          <Typography variant="body1" textAlign="center">
            Looking your best gets easy with My Perfect Fit by your side.
            Discover a whole new way to shop for menswear with custom clothing,
            stylist assistance, premium fabrics, online measurements and so much
            more. Begin your journey to a perfectly styled future today.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {servedInfoContent.map((item, index) => (
            <Grid key={index} alignSelf="center" item md={3} lg={3}>
              <ServedCard label={item.total} content={item.label} />
            </Grid>
          ))}
        </Grid>
      </StyledHomeInfoSectionWrapper>
    </div>
  );
};

export default HomeInfoSection;
