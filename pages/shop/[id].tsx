import React, { Fragment, useEffect } from "react";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StylistCard from "../../src/components/cards/stylistCard";
import ProductViewSlider from "../../src/components/sliders/productView";
import DefaultButton from "../../src/components/buttons/defaultButton";
import CustomizationDrawer from "../../src/components/common/defaultDrawer";
import CustomizationForm from "../../src/forms/customizationForm";
import useGetSingleProductByProductName from "../../apollo/hooks/useGetSingleProductByProductName";
import CircularLoadingIndication from "../../src/components/loadingIndicators/circularLoadingIndication";
import { useRouter } from "next/router";
import ProductDetailsCard from "../../src/components/cards/productDetailsCard";
import moment from "moment";
import CustomStylingCard from "../../src/components/cards/customStylingCard";
import ProductSlider from "../../src/components/sliders/productSlider";
const StyledShopPageWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const ShopPage = () => {
  const {
    GetSingleProductByName,
    singleProductData,
    isLoadingSingleProduct,
    singleProductError,
  } = useGetSingleProductByProductName();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      GetSingleProductByName({
        variables: {
          productName: router?.query?.id as string,
        },
      });
    }
  }, [router]);

  return (
    <DefaultLayout showBackButton={true} appBarTitle="Shop">
      {isLoadingSingleProduct && !singleProductData && (
        <CircularLoadingIndication />
      )}
      {!isLoadingSingleProduct && singleProductData && (
        <StyledShopPageWrapper>
          <ProductViewSlider
            imageAlt="slider-image"
            sliderImages={singleProductData?.images}
          />
          <Grid p={2} container>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h4">
                {singleProductData.title}
              </Typography>
            </Grid>
            <Grid mt={2} mb={2} item xs={12} container alignItems="flex-end">
              <Grid item xs>
                <Typography variant="h3">₹{singleProductData.price}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                {singleProductData.description}
              </Typography>
            </Grid>
            <Grid item mt={2} xs={12}>
              <DefaultButton id="btn-add-to-cart" label="Add To Cart" />
            </Grid>
            <Grid mt={2} mb={2} item xs={12}>
              <Typography variant="h6">Product Details</Typography>
            </Grid>
            <Grid item xs={12}>
              <ProductDetailsCard data={singleProductData} />
            </Grid>
            {singleProductData.size ? (
              <Fragment></Fragment>
            ) : (
              <Grid mt={2} item xs={12}>
                <Typography variant="h6">Size</Typography>
                <Typography variant="caption">
                  CUSTOM MADE based on your measurements profile. Follow a 3
                  steps simple process for measurements after placing the order.
                </Typography>
              </Grid>
            )}

            <Grid mt={2} item xs={12}>
              <Typography gutterBottom variant="h6">
                Shipping and Delivery
              </Typography>
              <Typography gutterBottom variant="h6">
                In India:
              </Typography>
              <Typography variant="caption">
                Free shipping within {singleProductData.deliveryDays} days on or
                before{" "}
                {moment(new Date())
                  .add(singleProductData.deliveryDays, "days")
                  .format("MMM Do YYYY")}
              </Typography>
              <Box mt={2}>
                <Typography gutterBottom variant="h6">
                  Outside India:
                </Typography>
                <Typography variant="caption">
                  Within 2-3 weeks. Please contact us on +91 8008329992
                </Typography>
              </Box>
            </Grid>
            <Grid mt={2} item xs={12}>
              <CustomStylingCard data={singleProductData} />
            </Grid>
            <Grid mt={3} item xs={12}>
              <StylistCard />
            </Grid>

            <Grid item mt={3} xs={12}>
              <ProductSlider />
            </Grid>
            <Grid item mt={3} xs={12}>
              <ProductSlider />
            </Grid>
          </Grid>
        </StyledShopPageWrapper>
      )}

      <CustomizationDrawer
        open={false}
        title="Customization"
        onClose={() => {}}
      >
        <CustomizationForm />
      </CustomizationDrawer>
    </DefaultLayout>
  );
};

export default ShopPage;
