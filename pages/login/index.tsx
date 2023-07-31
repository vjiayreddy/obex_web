import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { signIn } from "next-auth/react";
import DefaultButton from "../../src/components/buttons/defaultButton";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid";
import HeadingWithContent from "../../src/components/headings/headingWithContent";

const StyledLoginPageBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <StyledLoginPageBox>
      <Box>
        <Grid
          spacing={1}
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid mb={2} item xs={12}>
            <HeadingWithContent
              headingProps={{
                textAlign: "center",
              }}
              contentProps={{
                textAlign: "center",
              }}
              heading="Welcome back , Guest"
              content="Welcome back! Please enter your details"
            />
          </Grid>

          <Grid item xs={12}>
            <DefaultButton
              size="large"
              id="btn-google-sign"
              label="Sign in With Google"
              color="google"
              onClick={handleGoogleLogin}
              
              sx={(theme) => ({
                width: theme.spacing(27),
              })}
              startIcon={<GoogleIcon />}
            />
          </Grid>
        </Grid>
      </Box>
    </StyledLoginPageBox>
  );
};

export default LoginPage;
