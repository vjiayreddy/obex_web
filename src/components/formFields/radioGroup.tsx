import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid, { GridProps } from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ImageAndLabelCard, {
  StyledImageAndLabelCardProps,
} from "../cards/ImageAndLabelCard";
import Box from "@mui/material/Box";

interface RadioGroupControlProps {
  id?: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  error?: any;
  label?: string;
  onChange?: (...event: any[]) => void;
  options: any[];
  defaultValues?: any;
  variant?: "IMAGE" | "CHIP" | "NORMAL";
  gridProps?: GridProps;
  gridItemProps?: GridProps;
  imageCardProps?: StyledImageAndLabelCardProps;
}

const RadioGroupControl = ({
  name,
  control,
  options,
  gridProps,
  gridItemProps,
  variant = "IMAGE",
  imageCardProps,
}: RadioGroupControlProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={{
          required: false,
        }}
        render={({ field }) => {
          return (
            <RadioGroup {...field}>
              <Grid spacing={1} container {...gridProps}>
                {options.map((option) => (
                  <Grid item {...gridItemProps} key={option._id}>
                    <FormControlLabel
                      sx={{ width: "100%", margin: 0, padding: 0 }}
                      value={option._id}
                      control={
                        <Radio
                          sx={{ width: "100%", padding: 0 }}
                          icon={
                            <Box sx={{ width: "100%" }}>
                              {variant === "IMAGE" && (
                                <ImageAndLabelCard
                                  cardWidth="100%"
                                  cardTitle={option.name}
                                  cardImageUrl={option?.image}
                                  {...imageCardProps}
                                />
                              )}
                              {variant === "CHIP" && (
                                <Chip
                                  label={option.name}
                                  variant="outlined"
                                  color="primary"
                                  sx={{ width: "100%" }}
                                />
                              )}
                            </Box>
                          }
                          checkedIcon={
                            <Box sx={{ width: "100%" }}>
                              {variant === "IMAGE" && (
                                <ImageAndLabelCard
                                  cardWidth="100%"
                                  imageBoxSx={{ border: `3px solid #ffc400` }}
                                  cardTitle={option.name}
                                  cardImageUrl={option?.image}
                                  {...imageCardProps}
                                />
                              )}
                              {variant === "CHIP" && (
                                <Chip
                                  sx={{ width: "100%" }}
                                  label={option.name}
                                  variant="filled"
                                  color="primary"
                                />
                              )}
                            </Box>
                          }
                        />
                      }
                      label=""
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          );
        }}
      />
    </FormControl>
  );
};

export default RadioGroupControl;
