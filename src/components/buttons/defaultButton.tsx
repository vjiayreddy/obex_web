import React from "react";
import { Button, ButtonProps } from "@mui/material";

export interface LoadingButtonProps extends ButtonProps {
  id: string;
  label: string;
}

const DefaultButton = ({ id, label, ...props }: LoadingButtonProps) => {
  return (
    <Button id={id} {...props}>
      {label}
    </Button>
  );
};

export default DefaultButton;
