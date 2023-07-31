import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import { Control, FieldValues, Controller } from "react-hook-form";
import ImageAndLabelCard, {
  StyledImageAndLabelCardProps,
} from "../cards/ImageAndLabelCard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ColorCard from "../cards/colorCard";
import { SxProps, Theme } from "@mui/material";

interface CheckBoxControlGroupProps {
  id: string;
  name: string;
  rules?: any;
  error?: any;
  labelName?: string;
  defaultValues?: any;
  variant?: "IMAGE" | "CHIP" | "NORMAL" | "COLOR_BOX";
  onChange: (checkValue: any, fieldName: string) => void;
  options: any[];
  control: Control<FieldValues, object>;
  gridProps?: GridProps;
  gridItemProps?: GridProps;
  colorBoxSx?: SxProps;
  imageCardProps?: StyledImageAndLabelCardProps;
}

const CheckBoxControlGroup = ({
  gridProps,
  name,
  control,
  options,
  onChange,
  defaultValues,
  variant,
  labelName,
  gridItemProps,
  rules,
  colorBoxSx,
  imageCardProps,
}: CheckBoxControlGroupProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValues}
        render={({ field, fieldState }) => {
          return (
            <Grid container spacing={1} {...gridProps}>
              {options.map((option) => (
                <Grid item {...gridItemProps} key={option._id}>
                  <FormControlLabel
                    sx={{ width: "100%", margin: 0, padding: 0 }}
                    label={labelName ? option[labelName] : ""}
                    control={
                      <>
                        {variant === "NORMAL" ? (
                          <CheckBox
                            {...field}
                            value={field.value}
                            onChange={() => {
                              field.onChange(onChange(option._id, name));
                            }}
                            defaultChecked={
                              defaultValues?.includes(option._id) ? true : false
                            }
                          />
                        ) : (
                          <Box sx={{ width: "100%" }}>
                            <CheckBox
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
                                      color="primary"
                                      sx={{ width: "100%" }}
                                      label={option.name}
                                      variant="outlined"
                                    />
                                  )}
                                  {variant === "COLOR_BOX" && (
                                    <ColorCard
                                      SxColorBoxProps={colorBoxSx}
                                      colorCode={`#${option.color}`}
                                      colorName={option.colorname}
                                    />
                                  )}
                                </Box>
                              }
                              checkedIcon={
                                <Box sx={{ width: "100%" }}>
                                  {variant === "IMAGE" && (
                                    <ImageAndLabelCard
                                      cardWidth="100%"
                                      imageBoxSx={{
                                        border: `3px solid #ffc400`,
                                      }}
                                      cardTitle={option.name}
                                      cardImageUrl={option?.image}
                                      {...imageCardProps}
                                    />
                                  )}
                                  {variant === "CHIP" && (
                                    <Chip
                                      color="primary"
                                      sx={{ width: "100%" }}
                                      label={option.name}
                                      variant="filled"
                                    />
                                  )}
                                  {variant === "COLOR_BOX" && (
                                    <ColorCard
                                      SxColorBoxProps={(theme: Theme) => ({
                                        border: `3px solid ${theme.palette.primary.main}`,
                                        ...colorBoxSx,
                                      })}
                                      colorCode={`#${option.color}`}
                                      colorName={option.colorname}
                                    />
                                  )}
                                </Box>
                              }
                              onChange={() => {
                                field.onChange(onChange(option._id, name));
                              }}
                              defaultChecked={defaultValues?.includes(
                                option._id
                              )}
                            />
                          </Box>
                        )}
                      </>
                    }
                  />
                </Grid>
              ))}
              {fieldState?.error && (
                <Grid item xs={12}>
                  <p>Please Select</p>
                </Grid>
              )}
            </Grid>
          );
        }}
      />
    </FormControl>
  );
};

export default CheckBoxControlGroup;
