import Slider from "@mui/material/Slider";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface SidlerControlProps {
  id?: string;
  name: string;
  rules?: any;
  error?: any;
  labelName?: string;
  defaultValues?: any;
  onChange?: (checkValue: any, fieldName: string) => void;
  control: Control<FieldValues, object>;
  minValue: number;
  maxValue: number;
}

const SidlerControl = ({
  control,
  name,
  rules,
  defaultValues,
  minValue,
  maxValue,
}: SidlerControlProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValues}
      render={({ field }) => (
        <Slider
          {...field}
          onChange={(_, value) => {
            field.onChange(value);
          }}
          valueLabelDisplay="on"
          max={maxValue}
          step={minValue}
        />
      )}
    />
  );
};

export default SidlerControl;
