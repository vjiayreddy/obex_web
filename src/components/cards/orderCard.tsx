import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import DefaultButton from "../buttons/defaultButton";
import { ProductOrderType } from "../../../apollo/hooks/useGetAllOrders";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../services/enums";
import moment from "moment";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

interface OrderCardProps {
  data: ProductOrderType;
}

const OrderCard = ({ data }: OrderCardProps) => {
  const router = useRouter();
  const handleNavigateToOrder = (orderId: string) => {
    router.push(`${APP_ROUTES.ORDERS}/${orderId}`);
  };

  return (
    <StyledCard sx={{ borderRadius: 0 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} container>
            <Grid item xs>
              <Typography>Order : #{data.orderId}</Typography>
            </Grid>
            <Grid item>
              <Typography>{data.orderTotal}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              {moment(data.orderDateTime.timestamp).format("MMM Do YYYY")}
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs>
              <Typography color="primary" variant="caption">
                Estimated Delivery Date march 21st
              </Typography>
            </Grid>
            <Grid item>
              <DefaultButton
                sx={{ padding: 0, minWidth: 0 }}
                variant="text"
                id="btn-order-view"
                label="View"
                onClick={() => {
                  handleNavigateToOrder(data._id);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default OrderCard;
