import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledCustomizationMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
  height:'100%'
}));

const StyledCustomizationFooterBox = styled(Box)(({ theme }) => ({
  minHeight:theme.spacing(5),
  borderTop:`1px solid ${theme.palette.divider}`
}));

const CustomizationForm = () => {
  return (
    <Fragment>
      <StyledCustomizationMainBox>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </StyledCustomizationMainBox>
      <StyledCustomizationFooterBox>Footer</StyledCustomizationFooterBox>
    </Fragment>
  );
};

export default CustomizationForm;
