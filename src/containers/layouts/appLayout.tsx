import React, { Fragment } from "react";
import AppNavigation from "./appNavigation/navigation";
import { styled } from "@mui/material/styles";
import { APP_BAR_SIZE } from "../../utils/constants";

const StyledMainContainer = styled("main")(({ theme }) => ({
  paddingTop: APP_BAR_SIZE,
  minHeight: `calc(100vh - ${APP_BAR_SIZE}px)`,
}));

interface AppLayoutProps {
  children: React.ReactNode;
  navMenus: any[];
}

const AppLayout = ({ children,navMenus }: AppLayoutProps) => {
  return (
    <Fragment>
      <AppNavigation />
      <StyledMainContainer>{children}</StyledMainContainer>
    </Fragment>
  );
};

export default AppLayout;
