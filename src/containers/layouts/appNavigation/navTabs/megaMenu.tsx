import React from "react";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { getOccasionsResponse } from "../../../../../apollo/hooks/useGetAllOccasions";

interface OccasionsMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any;
}

const StyledMenuPaper = styled(Paper)(() => ({
  width: "100%",
  padding: 20,
}));

const StyledMenuListHeader = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1.4),
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: Number(theme.zIndex.appBar),
}));

const OccasionsMenu: React.FC<OccasionsMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
  menus,
}) => {
  console.log(menus);
  return (
    <StyledPopper open={open} anchorEl={anchorEl} role={undefined} transition>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Container maxWidth="md">
            <StyledMenuPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <Grid container spacing={3}>
                  <Grid item md={4} lg={4} xl={4}>
                    <StyledMenuListHeader>Regular Wares</StyledMenuListHeader>
                    <MenuList
                      dense
                      autoFocusItem={open}
                      id="products-menu"
                      aria-labelledby="products-menu"
                      onKeyDown={onKeyDown}
                    >
                      {menus?.occasions.map((menu) => (
                        <MenuItem key={menu._id}>{menu.label}</MenuItem>
                      ))}
                    </MenuList>
                  </Grid>
                  <Grid item md={4} lg={4} xl={4}>
                    <StyledMenuListHeader>Occasions</StyledMenuListHeader>
                    <MenuList
                      dense
                      autoFocusItem={open}
                      id="products-menu"
                      aria-labelledby="products-menu"
                      onKeyDown={onKeyDown}
                    >
                      {menus?.regular[0]?.categories.map((menu) => (
                        <MenuItem key={menu._id}>{menu.label}</MenuItem>
                      ))}
                    </MenuList>
                  </Grid>

                  <Grid item md={4} lg={4} xl={4}>
                    <StyledMenuListHeader>Accessories</StyledMenuListHeader>
                    <MenuList
                      dense
                      autoFocusItem={open}
                      id="products-menu"
                      aria-labelledby="products-menu"
                      onKeyDown={onKeyDown}
                    >
                      {menus?.accessories[0].categories.map((menu) => (
                        <MenuItem key={menu._id}>{menu.label}</MenuItem>
                      ))}
                    </MenuList>
                  </Grid>
                </Grid>
              </ClickAwayListener>
            </StyledMenuPaper>
          </Container>
        </Grow>
      )}
    </StyledPopper>
  );
};
export default OccasionsMenu;
