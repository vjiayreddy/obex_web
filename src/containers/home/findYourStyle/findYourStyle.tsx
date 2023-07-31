import { Card, CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const FindYourStyle = () => {
  return (
    <Box mb={10}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h4">
            Find your style at your convenience
          </Typography>
        </Grid>
        <Grid item xs={12} container columnSpacing={3} alignItems="stretch">
          <Grid item xs={12} md={4} lg={4} sm={4} xl={4}>
            <Card>
              <CardContent>
                <Typography textAlign="center" variant="h6">
                  Talk to a stylist
                </Typography>
                <Typography textAlign="center" variant="body2">
                  Get expert, personalized help from stylists to help you make
                  the right fashion decisions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={4} xl={4}>
            <Card>
              <CardContent>
                <Typography textAlign="center" variant="h6">
                  Visit our store
                </Typography>
                <Typography textAlign="center" variant="body2">
                  Meet us in person at our studios and discover our tech-enabled
                  approach to fashion
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={4} xl={4}>
            <Card>
              <CardContent>
                <Typography textAlign="center" variant="h6">
                  Schedule a video call
                </Typography>
                <Typography textAlign="center" variant="body2">
                  Shop from any place and any device through video calls with
                  our stylists
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindYourStyle;
