import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CartItemType } from "../../services/types";
import Box from "@mui/material/Box";

interface OrderCartCardProps {
  data: CartItemType;
}

const OrderCartCard = ({ data }: OrderCartCardProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <img width="50px" src={data?.images[0]} />
      </Grid>
      <Grid item xs container spacing={1}>
        <Grid item xs>
          <Typography variant="caption">{data.name}</Typography>
          <Box>
            <Typography variant="caption">Price : {data.price}</Typography>
          </Box>
          <Typography variant="caption">Qty : {data.qty}</Typography>
        </Grid>
        <Grid item>{data.price * data.qty}</Grid>
      </Grid>
    </Grid>
  );
};

export default OrderCartCard;
