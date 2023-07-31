import React, { Fragment, useEffect } from "react";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import useGetSingleOrderByOrderId from "../../apollo/hooks/useGetSingleOrderByOrderId";
import { useRouter } from "next/router";
import CircularLoadingIndication from "../../src/components/loadingIndicators/circularLoadingIndication";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent, Divider, Grid, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import OrderCartCard from "../../src/components/cards/orderCartCard";
import moment from "moment";
import AddressCard from "../../src/components/cards/addressCard";

const StyledMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const steps = [
  {
    label: "Order Confirmed",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Add Measurements",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Stitching In Progress",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: "Order Shipped",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

const OrderDetailsPage = () => {
  const {
    GetSingleProductOrder,
    singleOrder,
    isLoadingOrder,
    errorSingleOrder,
  } = useGetSingleOrderByOrderId();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      GetSingleProductOrder({
        variables: {
          orderId: router?.query?.id as string,
        },
      });
    }
  }, [router]);


  return (
    <DefaultLayout appBarTitle="Back" showBackButton={true}>
      {isLoadingOrder && <CircularLoadingIndication />}
      {!isLoadingOrder && singleOrder && (
        <StyledMainBox>
          <Box p={2}>
            <Typography variant="h5">
              Order placed on{" "}
              {moment(new Date(singleOrder.orderDateTime.timestamp)).format(
                "MMMM Do YYYY, h:mm a"
              )}
            </Typography>
            <Box mt={2}>
              <Card>
                <CardContent>
                  <Stepper activeStep={3} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </CardContent>
              </Card>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">Delivery Address</Typography>
            </Box>
            <Box mt={2}>
              <AddressCard data={singleOrder.address} />
            </Box>
            <Box mt={2}>
              <Typography variant="h5">Order Details</Typography>
            </Box>
            {singleOrder?.items.length > 0 && (
              <Box mt={2}>
                <Card>
                  <CardContent>
                    {singleOrder.items.map((cartItem, index) => (
                      <Fragment key={index}>
                        <OrderCartCard data={cartItem} />
                        <Box mb={1}>
                          <Divider />
                        </Box>
                      </Fragment>
                    ))}

                    <Grid container>
                      <Grid item xs>
                        <Typography variant="h6">Total</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          {singleOrder.orderTotal}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            )}
          </Box>
        </StyledMainBox>
      )}
    </DefaultLayout>
  );
};

export default OrderDetailsPage;
