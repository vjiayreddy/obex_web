import React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

import CardContent from "@mui/material/CardContent";
import { AddressType } from "../../services/types";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

interface AddressCardTwoProps {
  data: AddressType;
}

const AddressCardTwo = ({ data }: AddressCardTwoProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs>
            <Typography variant="body1">
              {data.firstName} {data.lastName}
            </Typography>
          </Grid>
          <Grid item>
            <Chip label="Home" size="small" />
          </Grid>
          <Grid mt={1} item xs={12}>
            <Typography variant="caption" component="p">
              {data.streetAddress ? data.streetAddress + "," : ""}
              {data.city ? data.city + "," : ""}
              {data.state ? data.state + "," : ""}
              {data.country ? data.country + "," : ""}
              {data.postalCode ? data.postalCode : ""}
            </Typography>
          </Grid>
          {data.email && (
            <Grid mt={1} item xs={12} container>
              <Grid item xs={1}>
                <EmailIcon/>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="caption">
                    {data.email}
                </Typography>
              </Grid>
            </Grid>
          )}
          {data.phone && (
            <Grid mt={1} item xs={12} container>
              <Grid item xs={1}>
                <CallIcon/>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="caption">
                    {data.phone}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressCardTwo;
