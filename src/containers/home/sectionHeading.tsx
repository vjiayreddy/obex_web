import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DefaultButton from "../../components/buttons/defaultButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SectionHeadingProps {
  title: string;
  btnName: string;
}

const SectionHeading = ({ title, btnName }: SectionHeadingProps) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <DefaultButton
          variant="text"
          id="btn-view-all"
          label={btnName}
          sx={{ padding: 0 }}
          endIcon={<ArrowForwardIosIcon sx={{ width: "14px" }} />}
        />
      </Grid>
    </Grid>
  );
};

export default SectionHeading;
