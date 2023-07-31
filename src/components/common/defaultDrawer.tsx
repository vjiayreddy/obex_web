import React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface CustomizationDrawerProps extends DrawerProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}
const StyledDrawerBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const StyledDrawerHeader = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DefaultDrawer = ({
  open,
  children,
  title,
  onClose,
  ...props
}: CustomizationDrawerProps) => {
  return (
    <Drawer open={open} anchor="right" {...props}>
      <StyledDrawerBox>
        <StyledDrawerHeader>
          <Grid p={2} container>
            <Grid item xs>
              <Typography>{title}</Typography>
            </Grid>
            <Grid item>
              <IconButton sx={{ padding: 0 }} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </StyledDrawerHeader>
        {children}
      </StyledDrawerBox>
    </Drawer>
  );
};

export default DefaultDrawer;
