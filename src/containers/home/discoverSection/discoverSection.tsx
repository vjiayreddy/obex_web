import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

const StyledDStylistBox = styled(Box)(() => ({
  paddingTop: 50,
  paddingBottom: 100,
}));

const StyledLeftContentBox = styled(Grid)(({ theme }) => ({
  padding: 50,
  minHeight: 300,
  backgroundColor: theme.palette.grey[100],
  boxSizing: "border-box",
}));

const StyledImageBox = styled(Grid)(({ theme }) => ({
  position: "relative",
  minHeight: 300,
  height: "100%",
  overflow: "hidden",
}));

const StyledDSTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 500,
  marginBottom: 40,
}));

const StyledDSContent = styled(Typography)<{ component: any }>(({ theme }) => ({
  color: theme.palette.grey[700],
}));

const DiscoverSection = () => {
  return (
    <StyledDStylistBox>
      <Box pl={30} pr={30} mt={5} mb={10}>
        <Typography gutterBottom textAlign="center" variant="subtitle1">
          Changing the way Men Shop
        </Typography>
        <Typography textAlign="center" variant="h4">
          Discover a whole new way to stay stylish - with My Perfect Fit
        </Typography>
      </Box>
      <Grid container alignItems="stretch">
        <Grid item md={6} lg={6} xl={6}>
          <StyledLeftContentBox>
            <Box>
              <StyledDSTitle variant="h4" component="h6">
                Great fabrics, latest designs
              </StyledDSTitle>
              <StyledDSContent gutterBottom variant="body1" component="p">
                The perfect outfit demands the best fabrics. Discover a range of
                fabrics that satisfy even the most sophisticated tastes. High
                thread count fabrics, pure wools and cashmeres are just a few
                fabrics among our large collection.
              </StyledDSContent>
              <Box pt={2}>
                <Button size="large">View More</Button>
              </Box>
            </Box>
          </StyledLeftContentBox>
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <StyledImageBox>
            <Image
              style={{ objectFit: "cover" }}
              placeholder="blur"
              loading="lazy"
              blurDataURL="/assets/images/fabric.webp"
              alt="fashion-trend"
              src="/assets/images/fabric.webp"
              fill
            />
          </StyledImageBox>
        </Grid>
      </Grid>
      <Grid container alignItems="stretch">
        <Grid item md={6} lg={6} xl={6}>
          <StyledImageBox>
            <StyledImageBox>
              <Image
                style={{ filter: `grayscale(0)`, objectFit: "cover" }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/experiences.webp"
                alt="fashion-trend"
                src="/assets/images/experiences.webp"
                fill
              />
            </StyledImageBox>
          </StyledImageBox>
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <StyledLeftContentBox>
            <Grid container>
              <Grid xs={12}>
                <Box>
                  <StyledDSTitle variant="h4" component="h6">
                    Bespoke experience
                  </StyledDSTitle>
                  <StyledDSContent variant="body1" component="p">
                    Feel the joy of a personalized menswear shopping experience.
                    Every garment you wear is designed to match your look, the
                    occasion, your preferences and skin tone, and is handcrafted
                    to give you the perfect fit.
                  </StyledDSContent>
                  <Box pt={2}>
                    <Button size="large">View More</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </StyledLeftContentBox>
        </Grid>
      </Grid>
      <Grid container alignItems="stretch">
        <Grid item md={6} lg={6} xl={6}>
          <StyledLeftContentBox>
            <Box>
              <StyledDSTitle variant="h4" component="h6">
                Elite service
              </StyledDSTitle>
              <StyledDSContent variant="body1" component="p">
                Confused about what to wear? Our experienced stylists will guide
                you at every step from suggesting looks and to fabric
                recommendations to expert styling for special events.
              </StyledDSContent>
              <Box pt={2}>
                <Button size="large">View More</Button>
              </Box>
            </Box>
          </StyledLeftContentBox>
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <StyledImageBox>
            <Image
              style={{ objectFit: "cover" }}
              placeholder="blur"
              loading="lazy"
              blurDataURL="/assets/images/eliteservice.webp"
              alt="fashion-trend"
              src="/assets/images/eliteservice.webp"
              fill
            />
          </StyledImageBox>
        </Grid>
      </Grid>
    </StyledDStylistBox>
  );
};

export default DiscoverSection;
