import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper, { PopperProps } from "@mui/material/Popper";
import React, { Fragment } from "react";

interface UserActionsProps extends PopperProps {
  onKeyDown?: (event: React.KeyboardEvent) => void;
  children: React.ReactNode;
}

const UserActionsMenu = ({ open, anchorEl, children,...props }: UserActionsProps) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
      {...props}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>{children}</Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default UserActionsMenu;
