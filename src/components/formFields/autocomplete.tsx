import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

interface AutoCompleteControlProps {
  id: string;
  name: string;
  rules?: any;
  error?: any;
  label?: string;
  targetValue?: string;
  isEqualValue: string;
  defaultValues?: any;
  options: any[];
  control: Control<FieldValues, object>;
  size?: "small" | "medium";
  onChange?: (data: any) => void;
}

const AutoCompleteControl = ({
  id,
  name,
  control,
  rules,
  defaultValues,
  isEqualValue,
  targetValue,
  options,
  onChange,
  size,
}: AutoCompleteControlProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValues || null}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <Autocomplete
            id={id}
            size={size}
            options={options}
            multiple={false}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              return option.label || option[`${targetValue}`];
            }}
            isOptionEqualToValue={(option, value) =>
              option[isEqualValue] === value[isEqualValue]
            }
            onChange={(_, data) => {
              field.onChange(data);
              onChange(data);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label=""
                variant="outlined"
                error={fieldState?.error ? true : false}
              />
            )}
            value={field.value}
          />
          {fieldState?.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    ></Controller>
  );
};

export default AutoCompleteControl;
