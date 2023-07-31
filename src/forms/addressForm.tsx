import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import FormInputField from "../components/formFields/textField";
import { useForm } from "react-hook-form";
import FormMobileInput from "../components/formFields/phoneInput";
import { matchIsValidTel } from "mui-tel-input";
import useSaveUserAddresses from "../../apollo/hooks/useSaveUserAddresses";
import LoadingButton from "../components/buttons/loadingButton";
import parsePhoneNumber from "libphonenumber-js";

const StyledMainBox = styled(Box)(({ theme }) => ({}));

const AddressForm = () => {
  const { control, handleSubmit } = useForm();
  const { SaveAddress, isLoadingSaveAddress, isErrorSaveAddress } =
    useSaveUserAddresses();
  const onSubmit = (data) => {
    const phoneNumber = parsePhoneNumber(data.phone);
    SaveAddress({
      variables: {
        address: {
          ...data,
          phone: phoneNumber.nationalNumber,
          countryCode: phoneNumber.countryCallingCode,
          userId: "5f8c1f5f2927681218811212",
        },
      },
    });
  };
  return (
    <StyledMainBox p={2}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "First Name",
            }}
            control={control}
            id="input-first-name"
            name="firstName"
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Last Name",
            }}
            control={control}
            id="input-last-name"
            name="lastName"
          />
        </Grid>
        <Grid item xs={12}>
          <FormMobileInput
            control={control}
            defaultValue=""
            name="phone"
            rules={{ validate: matchIsValidTel }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Email Address",
            }}
            control={control}
            id="input-email"
            name="email"
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "City",
            }}
            control={control}
            id="input-city"
            name="city"
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "State",
            }}
            control={control}
            id="input-state"
            name="state"
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Country",
            }}
            control={control}
            id="input-country"
            name="country"
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Postal Code",
            }}
            control={control}
            id="input-postal-code"
            name="postalCode"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Street Address",
              multiline: true,
              rows: 3,
            }}
            control={control}
            id="input-address"
            name="streetAddress"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            textFieldProps={{
              size: "small",
              placeholder: "Land Mark (Optional)",
              multiline: true,
              rows: 2,
            }}
            control={control}
            id="input-landmark"
            name="landmark"
          />
        </Grid>
        <Grid mt={1} item xs={12}>
          <LoadingButton
            loading={isLoadingSaveAddress}
            id="btn-submit"
            label="Submit"
            fullWidth
            onClick={handleSubmit(onSubmit)}
          />
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default AddressForm;
function SaveAddress() {
  throw new Error("Function not implemented.");
}
