import React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

interface DefaultDialogProps {
  dialogProps: DialogProps;
  onClose: () => void;
  children: React.ReactNode;
}

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
}));

const DefaultDialog = ({
  onClose,
  children,
  dialogProps,
}: DefaultDialogProps) => {
  return (
    <Dialog {...dialogProps}>
      <StyledDialogContent>
        <Grid container alignItems="center">
          <Grid p={2} item xs>
            <Typography>Filters</Typography>
          </Grid>
          <Grid pr={1} item>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        {children}
      </StyledDialogContent>
    </Dialog>
  );
};

export default DefaultDialog;
