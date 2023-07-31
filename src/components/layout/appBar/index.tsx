import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import React from "react";
import { shouldForwardProp } from "../../utils";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import CircularProgress from "@mui/material/CircularProgress";
import Badge from "@mui/material/Badge";
import { APP_BAR_ICONS_SIZE } from "../../../utils/constants";

interface StyledToolBarProps {
  minHeight?: number;
}

const StyledToolBar = styled(Toolbar, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledToolBarProps>(["minHeight"], prop),
})<StyledToolBarProps>(({ theme, minHeight }) => ({
  alignItems: "flex-start",
  flexDirection: "column",
  padding: theme.spacing(0.8),
  ...(minHeight && {
    "@media all": {
      minHeight: minHeight,
    },
  }),
}));

const StyledToolBarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));

const StyledToolBarOptionalNode = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export interface AppBarComponentProps {
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

const AppBarComponent = ({
  showBackButton,
  appBarTitle,
  showCartIcon,
  showUserIcon,
  actions,
  isLoadingCartItems,
  badgeCount,
  toolBarOptionalNode,
  onClickBackIconButton,
  onClickMenuIconButton,
}: AppBarComponentProps) => {
  return (
    <AppBar position="static">
      <StyledToolBar disableGutters variant="dense">
        <StyledToolBarHeader>
          {showBackButton ? (
            <IconButton
              size="small"
              sx={{ paddingLeft: 0 }}
              onClick={onClickBackIconButton}
            >
              <ArrowBackIcon sx={{ width: APP_BAR_ICONS_SIZE }} />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              sx={{ paddingLeft: 0 }}
              onClick={onClickMenuIconButton}
            >
              <MenuIcon sx={{ width: APP_BAR_ICONS_SIZE }} />
            </IconButton>
          )}

          <Box flexGrow={1}>{appBarTitle}</Box>
          {showCartIcon && (
            <IconButton size="small" sx={{ paddingRight: "5px" }}>
              {isLoadingCartItems ? (
                <CircularProgress size={18} />
              ) : (
                <Badge
                  badgeContent={badgeCount}
                  variant="standard"
                  color="secondary"
                >
                  <LocalMallIcon sx={{ width: APP_BAR_ICONS_SIZE }} />
                </Badge>
              )}
            </IconButton>
          )}
          {showUserIcon && (
            <IconButton size="small" sx={{ paddingRight: 0 }}>
              <AccountCircle sx={{ width: APP_BAR_ICONS_SIZE }} />
            </IconButton>
          )}
          {actions}
        </StyledToolBarHeader>
        {toolBarOptionalNode && (
          <StyledToolBarOptionalNode>
            {toolBarOptionalNode}
          </StyledToolBarOptionalNode>
        )}
      </StyledToolBar>
    </AppBar>
  );
};

export default AppBarComponent;
