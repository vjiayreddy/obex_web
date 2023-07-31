import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { APP_BAR_ICONS_SIZE } from "../../../utils/constants";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import UserActions from "./userActions/userActions";

interface MobileNavigationProps {
  loadingIndicator?: boolean;
  badgeCount?: number;
  showCartIcon?: boolean;
}

const MobileNavigation = ({
  loadingIndicator,
  badgeCount,
  showCartIcon = true,
}: MobileNavigationProps) => {
  return (
    <Toolbar>
      <IconButton>
        <MenuIcon
          sx={{ width: APP_BAR_ICONS_SIZE, height: APP_BAR_ICONS_SIZE }}
        />
      </IconButton>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">Home</Typography>
      </Box>
      <UserActions />
      <Box>
        <Grid container alignItems="center" spacing={1}>
          {showCartIcon && (
            <Grid item>
              <IconButton size="small" sx={{ paddingRight: "5px" }}>
                {loadingIndicator ? (
                  <CircularProgress size={18} />
                ) : (
                  <Badge
                    badgeContent={badgeCount}
                    variant="standard"
                    color="secondary"
                  >
                    <LocalMallIcon
                      sx={{
                        width: APP_BAR_ICONS_SIZE,
                        height: APP_BAR_ICONS_SIZE,
                      }}
                    />
                  </Badge>
                )}
              </IconButton>
            </Grid>
          )}

          <Grid item>
            <IconButton>
              <Avatar
                sx={{
                  width: APP_BAR_ICONS_SIZE,
                  height: APP_BAR_ICONS_SIZE,
                }}
              >
                N
              </Avatar>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Toolbar>
  );
};

export default MobileNavigation;
