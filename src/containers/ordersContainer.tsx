import Box from "@mui/material/Box";
import React from "react";
import { styled } from "@mui/material/styles";
import OrderCard from "../components/cards/orderCard";

interface OrdersContainerProps {
  data: any[];
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const OrdersContainer = ({ data }: OrdersContainerProps) => {
  return (
    <StyledMainBox>
      {data.map((order, index) => (
        <OrderCard data={order} key={index} />
      ))}
    </StyledMainBox>
  );
};

export default OrdersContainer;
