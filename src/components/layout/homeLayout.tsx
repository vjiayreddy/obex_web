import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SideDrawer from "../drawer/SideDrawer";
import DefaultButton from "../buttons/defaultButton";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { APP_ROUTES, AUTH_STATE } from "../../services/enums";
import useGetUserCartById from "../../../apollo/hooks/useGetUserCartById";
import { useTheme } from "next-themes";
import AppBarComponent, { AppBarComponentProps } from "./appBar";
import BottomNavigationComponent from "./bottomNavigation";

const StyledLayoutBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const StyledDrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
}));

interface DefaultLayoutProps extends AppBarComponentProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children, ...props }: DefaultLayoutProps) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const { GetProductCartByUserId, cartData, isLoadingCartItems } =
    useGetUserCartById();

  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleClickBack = () => {
    router.back();
  };

  const handleChangeTabs = (_, value: any) => {
    router.push(
      {
        pathname: APP_ROUTES.HOME,
        query: {
          tab: value,
        },
      },
      undefined,
      { shallow: true }
    );
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
        <AppBarComponent
          badgeCount={cartData?.items.length}
          onClickBackIconButton={handleClickBack}
          onClickMenuIconButton={handleOpenDrawer}
          isLoadingCartItems={isLoadingCartItems}
          {...props}
        />
        {children}
        <BottomNavigationComponent
          onChange={handleChangeTabs}
          value={Number(router?.query?.tab) || 0}
        />
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

export default HomeLayout;
