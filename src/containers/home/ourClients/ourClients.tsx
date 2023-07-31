import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { THEME_MODE } from "../../../utils/constants";

const StyledOurClientWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: 100,
  position: "relative",
  overflow: "hidden",
}));

const MasonryGrid = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));

const MasonryGridItem = styled(Box)(({ theme }) => ({
  backgroundColor: "gainsboro",
  position: "relative",
}));

const StyledOverlyLayer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: theme.palette.common.white,
}));

const OurClients = () => {
  const theme = useTheme();
  return (
    <StyledOurClientWrapper>
      <Marquee
        gradient
        gradientWidth={150}
        gradientColor={
          theme.palette.mode === THEME_MODE.LIGHT ? [0, 0, 0] : [18, 18, 18]
        }
        pauseOnHover={true}
      >
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/03.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/05.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={2}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/14.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/08.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/04.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/06.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/07.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/17.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/09.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1} style={{ backgroundColor: "red" }}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/10.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={2}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/11.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={2}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/12.jpg"
            />
          </MasonryGridItem>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/13.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/01.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/15.jpg"
            />
          </MasonryGridItem>

          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/16.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
        <MasonryGrid>
          <MasonryGridItem flex={1}>
            <Image
              fill
              alt=""
              style={{
                objectFit: "cover",
                filter: `contrast(140%) brightness(0.5)`,
              }}
              src="/assets/images/compress-images/18.jpg"
            />
          </MasonryGridItem>
        </MasonryGrid>
      </Marquee>
      <StyledOverlyLayer>
        <Typography gutterBottom textAlign="center" variant="h3">
          Our dapper customers
        </Typography>
        <Button color="primary" size="large">
          View More
        </Button>
      </StyledOverlyLayer>
    </StyledOurClientWrapper>
  );
};

export default OurClients;
