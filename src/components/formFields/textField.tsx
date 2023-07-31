import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControl from "@mui/material/FormControl";

import { TextField, TextFieldProps } from "@mui/material";

interface FormInputFieldProps {
  id?: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  label?: string;
  defaultValues?: any;
  textFieldProps?: TextFieldProps;
}

const FormInputField = ({
  id,
  name,
  control,
  textFieldProps,
  defaultValues,
  label,
  rules,
}: FormInputFieldProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValues ? defaultValues : ""}
        rules={rules}
        render={({ field, fieldState }) => {
          return (
            <TextField
              id={id}
              variant="outlined"
              label={label}
              {...field}
              {...textFieldProps}
              error={fieldState?.error ? true : false}
            />
          );
        }}
      />
    </FormControl>
  );
};

export default FormInputField;
