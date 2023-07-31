import React from "react";
import { Button, ButtonProps } from "@mui/material";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

export interface LoadingButtonProps extends ButtonProps {
  label: string;
  loadingIconPosition?: "start" | "end";
  id: string;
  loading: boolean;
  icon?: React.ReactNode;
  loadingCircleProps?: CircularProgressProps;
}

const LoadingButton = ({
  id,
  label,
  loading,
  icon,
  loadingIconPosition = "start",
  loadingCircleProps,
  ...props
}: LoadingButtonProps) => {
  const showIcon = () => {
    if (loading && icon) {
      return icon;
    } else if (loading) {
      return (
        <CircularProgress size="14px" color="inherit" {...loadingCircleProps} />
      );
    }
    return null;
  };

  const getStartIcon = () => {
    return showIcon();
  };

  const getEndIcon = () => {
    return showIcon();
  };

  return (
    <Button
      startIcon={loadingIconPosition === "start" ? getStartIcon() : null}
      endIcon={loadingIconPosition === "end" ? getEndIcon() : null}
      id={id}
      {...props}
    >
      {label}
    </Button>
  );
};

export default LoadingButton;
