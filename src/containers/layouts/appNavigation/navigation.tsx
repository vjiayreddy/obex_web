import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import MobileNavigation from "./mobileNavigation";
import DesktopNavigation from "./desktopNavigation";

export interface AppNavigationProps {
  toolBarOptionalNode?: React.ReactNode;
  appBarTitle?: string;
  showBackButton?: boolean;
  showCartIcon?: boolean;
  showUserIcon?: boolean;
  actions?: React.ReactNode;
  isLoadingCartItems?: boolean;
  badgeCount?: number;
  onClickBackIconButton?: () => void;
  onClickMenuIconButton?: () => void;
}

const AppNavigation = ({
  isLoadingCartItems,
  badgeCount,
  showCartIcon,
}: AppNavigationProps) => {
  return (
    <AppBar position="fixed">
      <Hidden only={["xs", "sm"]}>
       <DesktopNavigation/>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <MobileNavigation
          badgeCount={badgeCount}
          loadingIndicator={isLoadingCartItems}
          showCartIcon={showCartIcon}
        />
      </Hidden>
    </AppBar>
  );
};

export default AppNavigation;
