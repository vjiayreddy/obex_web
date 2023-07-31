import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Avatar from "@mui/material/Avatar";
import UserActionsMenu from "./userActionsMenu";
import CircularProgress from "@mui/material/CircularProgress";
import Badge from "@mui/material/Badge";
import { useSession, signOut } from "next-auth/react";
import { AUTH_STATE } from "../../../../services/enums";
import { APP_BAR_ICONS_SIZE, THEME_MODE } from "../../../../utils/constants";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useTheme } from "next-themes";

interface UserActionsProps {
  showCartIcon?: boolean;
  showCartLoadingIndication?: boolean;
}

const UserActions = ({
  showCartIcon = true,
  showCartLoadingIndication,
}: UserActionsProps) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const changeTheme = () => {
    setTheme(
      resolvedTheme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  const logout = () => {
    signOut();
  };

  return (
    <Box>
      <Grid container spacing={1} alignItems="center">
        {showCartIcon && (
          <Grid item>
            <IconButton size="small" sx={{ paddingRight: "5px" }}>
              {showCartLoadingIndication ? (
                <CircularProgress size={18} />
              ) : (
                <Badge badgeContent={0} variant="standard" color="secondary">
                  <LocalMallIcon />
                </Badge>
              )}
            </IconButton>
          </Grid>
        )}

        <Grid item>
          {status === AUTH_STATE.LOADING ? (
            <CircularProgress size={18} />
          ) : (
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "user-action-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={
                status === AUTH_STATE.AUTHENTICATED ? handleToggle : null
              }
            >
              {status === AUTH_STATE.AUTHENTICATED ? (
                <Avatar
                  sx={{ width: APP_BAR_ICONS_SIZE, height: APP_BAR_ICONS_SIZE }}
                  alt={session?.user?.name}
                  src={session?.user?.image}
                />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
          )}
        </Grid>
      </Grid>

      <UserActionsMenu
        open={open}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={open}
            id="user-action-menu"
            aria-labelledby="user-action-menu-button"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem onClick={changeTheme}>Change Theme</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </UserActionsMenu>
    </Box>
  );
};

export default UserActions;
