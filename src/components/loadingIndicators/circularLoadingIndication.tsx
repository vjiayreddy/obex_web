import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { FormHelperText } from "@mui/material";
const StyledCircularLoadingIndication = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const CircularLoadingIndication = () => {
  return (
    <StyledCircularLoadingIndication>
      <CircularProgress color="inherit" />
      <Box mt={1}>
        <FormHelperText>Loading...</FormHelperText>
      </Box>
    </StyledCircularLoadingIndication>
  );
};

export default CircularLoadingIndication;
