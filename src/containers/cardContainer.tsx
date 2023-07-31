import React, { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CartItemCard from "../components/cards/cartItemCard";
import DefaultButton from "../components/buttons/defaultButton";
import { GetProductCartByUserIdResponse } from "../../apollo/hooks/useGetUserCartById";
import useUpdateCartItemQuantity from "../../apollo/hooks/useUpdateCartItemQuantity";
import useRemoveCartItem from "../../apollo/hooks/useRemoveCartItem";
import { CartItemType } from "../services/types";

const StyledCardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const StyledCartHeader = styled(Box)(({ theme }) => ({
  minHeight: "50px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
}));

const StyledCartFooter = styled(Box)(({ theme }) => ({
  minHeight: "50px",
  padding: 20,
  borderTop: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface CardContainerProps {
  data: GetProductCartByUserIdResponse;
}

const CardContainer = ({ data }: CardContainerProps) => {
  const [cartItem, setCartItem] = useState<CartItemType>();
  const { UpdateItemQuantityInUserCart, isUpdatingItemQuantity } =
    useUpdateCartItemQuantity();
  const { RemoveItemFromUserCart, isRemoveItemFromCart } = useRemoveCartItem();

  const handleAddItemQuantity = (cartData) => {
    setCartItem(cartData);
    UpdateItemQuantityInUserCart({
      variables: {
        cartId: data._id,
        quantity: Number(cartData.qty) + 1,
        itemId: cartData?.itemId,
      },
    });
  };
  const handleRemoveQuantity = (cartData) => {
    setCartItem(cartData);
    if (Number(cartData.qty) <= 1) {
      return;
    } else {
      UpdateItemQuantityInUserCart({
        variables: {
          cartId: data._id,
          quantity: Number(cartData.qty) - 1,
          itemId: cartData?.itemId,
        },
      });
    }
  };
  const handleCustomization = () => {};
  const handleDeleteCartItem = (cartData) => {
    RemoveItemFromUserCart({
      variables: {
        cartId: data._id,
        itemId: cartData?.itemId,
      },
    });
  };

  return (
    <Fragment>
      <StyledCartHeader>
        <Box flexGrow={1}>Total Amount</Box>
        <Box>{data?.totalPrice}</Box>
      </StyledCartHeader>
      <StyledCardContainer>
        <Grid container>
          {data?.items?.length > 0 && (
            <Fragment>
              {data?.items?.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <CartItemCard
                    disabled={
                      cartItem?.itemId === item?.itemId
                        ? isUpdatingItemQuantity
                        : false
                    }
                    onAddQuantity={handleAddItemQuantity}
                    onDeleteQuantity={handleRemoveQuantity}
                    onClickCustomization={handleCustomization}
                    onDeleteCartItem={handleDeleteCartItem}
                    cardData={item}
                  />
                </Grid>
              ))}
            </Fragment>
          )}
        </Grid>
      </StyledCardContainer>
      <StyledCartFooter>
        <DefaultButton id="btn-proceed" label="Proceed to checkout" />
      </StyledCartFooter>
    </Fragment>
  );
};

export default CardContainer;
