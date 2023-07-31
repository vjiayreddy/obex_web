import React from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

interface StyledContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  position:"relative"
}));

const DefaultContainer: React.FC<StyledContainerProps> = ({
  children,
  ...props
}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default DefaultContainer;
