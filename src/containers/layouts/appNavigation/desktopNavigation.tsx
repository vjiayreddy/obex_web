import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserActions from "./userActions/userActions";
import NavTabs from "./navTabs/navTabs";

const StyledLogo = styled(Box)(({ theme }) => ({}));

const DesktopNavigation = () => {
  return (
    <Toolbar>
      <StyledLogo>
        <Typography variant="h5">LOGO</Typography>
      </StyledLogo>
      <Box
        flexGrow={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <NavTabs />
      </Box>
      <UserActions />
    </Toolbar>
  );
};

export default DesktopNavigation;
