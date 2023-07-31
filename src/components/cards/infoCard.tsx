import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DefaultButton from "../buttons/defaultButton";

const StyledCardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

interface InfoCardProps {
  title: string;
  infoMessage?: string;
  imageUrl?: string;
  btnName: string;
  onClickBtn: () => void;
}

const InfoCard = ({
  title,
  infoMessage,
  imageUrl,
  btnName,
  onClickBtn,
}: InfoCardProps) => {
  return (
    <StyledCardContainer>
      <Box>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <img
              width={180}
              src={imageUrl ? imageUrl : "/assets/images/no-data.png"}
            />
          </Grid>
          <Grid p={2} item xs={12}>
            <Typography gutterBottom textAlign="center" variant="h4">
              {title}
            </Typography>
            <Typography textAlign="center" variant="body2">
              {infoMessage}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DefaultButton id="btn-add" label={btnName} onClick={onClickBtn} />
          </Grid>
        </Grid>
      </Box>
    </StyledCardContainer>
  );
};

export default InfoCard;
