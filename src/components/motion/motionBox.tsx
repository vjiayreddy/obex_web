import React from "react";
import { motion } from "framer-motion";
import MuiBox, { BoxProps } from "@mui/material/Box";

const MotionBox = React.forwardRef((props: BoxProps, ref) => (
  <MuiBox {...props} ref={ref} />
));

const Box = motion(MotionBox);

export default Box;
