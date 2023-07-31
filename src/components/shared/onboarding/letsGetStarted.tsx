import Box from "@mui/material/Box";
import React from "react";
import HeadingWithContent from "../../headings/headingWithContent";
import Typography from "@mui/material/Typography";
import DefaultButton from "../../buttons/defaultButton";

const LetsGetStarted = () => {
  return (
    <>
      <Box pt={3} pb={2}>
        <HeadingWithContent
          headingVariant="h3"
          contentVariant="body2"
          headingProps={{
            textAlign: "center",
          }}
          contentProps={{
            textAlign: "center",
          }}
          hideHelpIcon={true}
          heading="It's time to style you!"
          content="Being a member of style club you get lifelong suggestions on what to wear, how to groom yourself, everything."
        />
      </Box>
      <Box flexGrow={1} pt={2} pb={2}>
        <Typography>Success</Typography>
      </Box>
      <Box pb={2} display="flex" alignItems="center" justifyContent="center">
        <DefaultButton id="btn-lets-get-started" label="Let's Get Started!" />
      </Box>
    </>
  );
};

export default LetsGetStarted;
