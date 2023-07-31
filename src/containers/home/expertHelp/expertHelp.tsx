import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, Typography } from "@mui/material";

const ExpertHelp = () => {
  return (
    <Box mb={10}>
      <Card>
        <CardContent>
          <Box p={3}>
            <Typography gutterBottom textAlign="center" variant="h4">
              Get expert help with your look
            </Typography>
            <Box pl={3} pr={3}>
              <Typography textAlign="center" variant="body1">
                Feel the joy of a personalized menswear shopping experience.
                Every garment you wear is designed to match your look, the
                occasion, your preferences and skin tone, and is handcrafted to
                give you the perfect fit.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExpertHelp;
