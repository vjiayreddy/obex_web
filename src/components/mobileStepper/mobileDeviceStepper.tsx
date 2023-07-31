import React from "react";
import MobileStepper, { MobileStepperProps } from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export interface MobileDeviceStepperProps {
  mobileStepperProps?: MobileStepperProps;
  mobileStepperContent: React.ReactNode;
  mobileStepperOnClickNext: () => void;
  mobileStepperOnClickPrevious: () => void;
  mobileStepperActiveStep: number;
  mobileStepperSteps: number;
}

const StyledMobileDeviceStepper = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor:
    theme.palette.mode == "dark"
      ? theme.palette.common.black
      : theme.palette.common.white,
}));

const StyledMobileDeviceStepperContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

const MobileDeviceStepper = ({
  mobileStepperProps,
  mobileStepperContent,
  mobileStepperOnClickNext,
  mobileStepperOnClickPrevious,
  mobileStepperActiveStep,
  mobileStepperSteps,
}: MobileDeviceStepperProps) => {
  const theme = useTheme();

  return (
    <StyledMobileDeviceStepper>
      <StyledMobileDeviceStepperContent>
        {mobileStepperContent}
      </StyledMobileDeviceStepperContent>
      <MobileStepper
        variant="text"
        steps={mobileStepperSteps}
        position="static"
        activeStep={mobileStepperActiveStep}
        nextButton={
          <Button
            size="small"
            onClick={mobileStepperOnClickNext}
            disabled={mobileStepperActiveStep === mobileStepperSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={mobileStepperOnClickPrevious}
            disabled={mobileStepperActiveStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        {...mobileStepperProps}
      />
    </StyledMobileDeviceStepper>
  );
};

export default MobileDeviceStepper;
