import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Variant } from "@mui/material/styles/createTypography";

export interface HeadingWithContentProps {
  heading: string;
  headingProps?: TypographyProps;
  headingVariant?: Variant;
  contentVariant?: Variant;
  contentProps?: TypographyProps;
  headingComponent?: any;
  content: string | React.ReactNode;
  hideHelpIcon?: boolean;
}

const HeadingWithContent = ({
  heading,
  hideHelpIcon = true,
  content,
  headingProps,
  contentProps,
  headingVariant,
  contentVariant,
  headingComponent,
}: HeadingWithContentProps) => {
  return (
    <Box>
      <Grid container alignItems="flex-start">
        <Grid item xs>
          <Typography
            variant={headingVariant || "h4"}
            component={headingComponent}
            gutterBottom={true}
            {...headingProps}
          >
            {heading}
          </Typography>
        </Grid>
        {!hideHelpIcon && (
          <Grid item>
            <IconButton size="small" sx={{ padding: 0 }}>
              <HelpOutlineIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      {typeof content === "string" ? (
        <Typography variant={contentVariant || "body2"} {...contentProps}>
          {content}
        </Typography>
      ) : (
        <>{content}</>
      )}
    </Box>
  );
};

export default HeadingWithContent;
