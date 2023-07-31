import styled from "@emotion/styled";
import Pagination, { PaginationProps } from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import React, { Fragment } from "react";
import { ProductType } from "../../apollo/hooks/useGetProductsByFilter";
import CircularLoadingIndication from "../components/loadingIndicators/circularLoadingIndication";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/cards/productCard";
import { useAddItemsIntoUserCart } from "../../apollo/hooks/useAddItemsIntoUserCart";
import { getCartPayloadToAddCartItem } from "../services/cart";

const StyledRenderProductsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const StyledPaginationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface ProductsRenderContainerProps {
  defaultPage: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  paginationProps?: PaginationProps;
  products: ProductType[];
  isProductLoading: boolean;
}

const ProductsRenderContainer = ({
  defaultPage,
  onChange,
  count,
  paginationProps,
  products,
  isProductLoading = false,
}: ProductsRenderContainerProps) => {
  const { AddItemsToUserCart, isAddingItemsIntoCart } =
    useAddItemsIntoUserCart();

  const handleAddToCart = (product: ProductType) => {
    AddItemsToUserCart({
      variables: {
        cart: {
          userId: "5f8c1f5f2927681218811212",
          note: "",
          items: getCartPayloadToAddCartItem(product),
        },
      },
    });
  };

  return (
    <Fragment>
      <StyledRenderProductsBox p={1}>
        {isProductLoading && <CircularLoadingIndication />}
        {!isProductLoading && products.length > 0 && (
          <Grid container spacing={1} alignItems="stretch">
            {products.map((item, index) => (
              <Grid key={index} xs={6} item md={4} lg={2} xl={2} sm={4}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  imgUrl={item.images[0]}
                  title={item.title}
                  onClickCartIcon={() => {
                    handleAddToCart(item);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </StyledRenderProductsBox>
      {products.length > 0 && (
        <StyledPaginationBox p={1}>
          <Pagination
            page={defaultPage}
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={onChange}
            {...paginationProps}
          />
        </StyledPaginationBox>
      )}
    </Fragment>
  );
};

export default ProductsRenderContainer;
