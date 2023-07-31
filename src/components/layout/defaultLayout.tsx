import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SideDrawer from "../drawer/SideDrawer";
import DefaultButton from "../buttons/defaultButton";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { APP_ROUTES, AUTH_STATE } from "../../services/enums";
import { shouldForwardProp } from "../utils";
import Badge from "@mui/material/Badge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useGetUserCartById from "../../../apollo/hooks/useGetUserCartById";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "next-themes";

interface StyledToolBarProps {
  minHeight?: number;
}

const StyledLayoutBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const StyledDrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
}));

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

interface DefaultLayoutProps {
  children: React.ReactNode;
  toolBarOptionalNode?: React.ReactNode;
  appBarTitle?: string;
  showBackButton?: boolean;
  showCartIcon?: boolean;
  showUserIcon?: boolean;
  actions?: React.ReactNode;
}

const DefaultLayout = ({
  children,
  toolBarOptionalNode,
  appBarTitle,
  showBackButton = false,
  showCartIcon = true,
  showUserIcon = true,
  actions,
}: DefaultLayoutProps) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();
  const { GetProductCartByUserId, cartData, isLoadingCartItems } =
    useGetUserCartById();

  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleBack = () => {
    router.back();
  };

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      GetProductCartByUserId({
        variables: {
          userId: "5f8c1f5f2927681218811212",
        },
      });
    }
  }, [status]);

  return (
    <Fragment>
      <StyledLayoutBox>
        <AppBar position="static">
          <StyledToolBar disableGutters variant="dense">
            <StyledToolBarHeader>
              {showBackButton ? (
                <IconButton sx={{ paddingLeft: 0 }} onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              ) : (
                <IconButton sx={{ paddingLeft: 0 }} onClick={handleOpenDrawer}>
                  <MenuIcon />
                </IconButton>
              )}

              <Box flexGrow={1}>{appBarTitle}</Box>
              {showCartIcon && (
                <IconButton sx={{ paddingRight: "5px" }}>
                  {isLoadingCartItems ? (
                    <CircularProgress size={18} />
                  ) : (
                    <Badge
                      badgeContent={cartData?.items.length}
                      variant="standard"
                      color="secondary"
                    >
                      <LocalMallIcon />
                    </Badge>
                  )}
                </IconButton>
              )}
              {showUserIcon && (
                <IconButton sx={{ paddingRight: 0 }}>
                  <AccountCircle />
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
        {children}
      </StyledLayoutBox>
      <SideDrawer open={openDrawer} onClose={handleCloseDrawer}>
        <StyledDrawerContent>
          <Box p={2}>
            <Box mb={1}>
              <Typography variant="caption">
                User: {session?.user?.name}
              </Typography>
              <Box>
                <Typography variant="caption">
                  Email: {session?.user?.email}
                </Typography>
              </Box>
            </Box>
            <Box mb={1}>
              <DefaultButton
                onClick={() => {
                  signOut();
                }}
                id="btn-sign-out"
                label="Sign out"
              />
            </Box>
            <Box mb={1}>
              <DefaultButton
                onClick={() => {
                  handleNavigate(APP_ROUTES.ON_BOARDING);
                }}
                color="secondary"
                id="btn-on-boarding"
                label="On Boarding"
              />
            </Box>
            <Box mb={1}>
              <DefaultButton
                onClick={() => {
                  handleNavigate(`${APP_ROUTES.PRODUCTS}/products`);
                }}
                color="secondary"
                id="btn-on-products"
                label="Products"
              />
            </Box>
            <Box mb={1}>
              <DefaultButton
                onClick={() => {
                  handleNavigate(APP_ROUTES.CART);
                }}
                color="secondary"
                id="btn-on-cart"
                label="Cart"
              />
            </Box>
            <Box mb={1}>
              <DefaultButton
                onClick={() => {
                  handleNavigate(APP_ROUTES.ORDERS);
                }}
                color="secondary"
                id="btn-on-cart"
                label="Orders"
              />
            </Box>
            <Box>
              <DefaultButton
                onClick={() => {
                  handleNavigate(APP_ROUTES.USER_ADDRESSES);
                }}
                color="secondary"
                id="btn-addresses"
                label="Addresses"
              />
            </Box>
            <Box>
              <DefaultButton
                onClick={() => {
                  setTheme(resolvedTheme === "light" ? "dark" : "light");
                }}
                color="secondary"
                id="btn-theme"
                label="Change Theme"
              />
            </Box>
          </Box>
        </StyledDrawerContent>
      </SideDrawer>
    </Fragment>
  );
};

export default DefaultLayout;
