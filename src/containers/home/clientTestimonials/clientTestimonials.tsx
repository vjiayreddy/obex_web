import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../../../components/cards/testimonialCard";
import { CLIENTS_TESTIMONIALS, THEME_MODE } from "../../../utils/constants";
import { useTheme } from "@mui/material/styles";

const ClientTestimonials = () => {
  const theme = useTheme();

  return (
    <Box mb={10}>
      <Box mb={10}>
        <Typography variant="h4" textAlign="center">
          Client Testimonials
        </Typography>
      </Box>

      <Marquee
        direction="left"
        gradient
        gradientColor={
          theme.palette.mode === THEME_MODE.LIGHT ? [255, 255, 255] : [18, 18, 18]
        }
      >
        {CLIENTS_TESTIMONIALS.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </Marquee>
    </Box>
  );
};

export default ClientTestimonials;
