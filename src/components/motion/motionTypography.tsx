import React from "react";
import { motion } from "framer-motion";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";

interface MotionTypographyProps extends TypographyProps {
  component?: any;
}

const Typography = React.forwardRef(
  ({ component, ...props }: MotionTypographyProps, ref) => (
    <MuiTypography component={component} {...props} ref={ref} />
  )
);

const MotionTypography = motion(Typography);

export default MotionTypography;
