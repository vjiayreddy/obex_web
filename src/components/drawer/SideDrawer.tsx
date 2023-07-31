import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";
import React from "react";

interface SideDrawerProps {
  drawerProps?: SwipeableDrawerProps;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const SideDrawer = ({
  children,
  drawerProps,
  open,
  onClose,
}: SideDrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => {}}
      onClose={onClose}
      {...drawerProps}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default SideDrawer;
