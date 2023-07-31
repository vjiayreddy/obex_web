import React, { Fragment, useEffect, useState } from "react";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import Grid from "@mui/material/Grid";
import SearchInput from "../../src/components/formFields/searchInput";
import useGetUserAddresses from "../../apollo/hooks/useGetUserAddresses";
import AddressesContainer from "../../src/containers/userAddressesContainer";
import CircularLoadingIndication from "../../src/components/loadingIndicators/circularLoadingIndication";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DefaultDrawer from "../../src/components/common/defaultDrawer";
import AddressForm from "../../src/forms/addressForm";
import InfoCard from "../../src/components/cards/infoCard";
import { useReactiveVar } from "@apollo/client";
import { setGqlReactiveUserAddress } from "../../apollo/reactiveState";

const AddressPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const selectedAddress = useReactiveVar(setGqlReactiveUserAddress);
  const {
    GetUserAddresses,
    allAddresses,
    isLoadingAddresses,
    errorUserAddresses,
  } = useGetUserAddresses();

  useEffect(() => {
    GetUserAddresses({
      variables: {
        userId: "5f8c1f5f2927681218811212",
      },
    });
  }, []);

  return (
    <DefaultLayout
      showCartIcon={false}
      showUserIcon={false}
      actions={
        <Fragment>
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddIcon />
          </IconButton>
        </Fragment>
      }
      toolBarOptionalNode={
        <Grid mt={1} container>
          <Grid item xs>
            <SearchInput />
          </Grid>
        </Grid>
      }
      showBackButton={true}
      appBarTitle="Addresses"
    >
      {isLoadingAddresses && !errorUserAddresses && (
        <CircularLoadingIndication />
      )}
      {!isLoadingAddresses &&
        allAddresses.length > 0 &&
        !errorUserAddresses && <AddressesContainer data={allAddresses} />}
      {!isLoadingAddresses &&
        allAddresses.length === 0 &&
        !errorUserAddresses && (
          <InfoCard
            btnName="Add New Address"
            onClickBtn={() => setOpen(true)}
            title="No Results Found"
            infoMessage="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        )}

      {errorUserAddresses && (
        <InfoCard
          btnName="Back To Home"
          onClickBtn={() => setOpen(true)}
          title="Internal Server Error"
          infoMessage={
            "Sorry, there were some technical issues while processing your request."
          }
        />
      )}

      <DefaultDrawer
        title="Add new Address"
        open={open || selectedAddress?.openModel}
        onClose={() => {
          setOpen(false);
          setGqlReactiveUserAddress(null);
        }}
      >
        <AddressForm />
      </DefaultDrawer>
    </DefaultLayout>
  );
};

export default AddressPage;
