import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AddressType } from "../services/types";
import AddressCard from "../components/cards/addressCard";
import { useDeleteAddress } from "../../apollo/hooks/useDeleteAddress";
import { setGqlReactiveUserAddress } from "../../apollo/reactiveState";

const StyledCardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
}));

interface CardContainerProps {
  data: AddressType[];
}

const AddressesContainer = ({ data }: CardContainerProps) => {
  const { DeleteAddress, isLoadingDeleteAddress } = useDeleteAddress();

  const handleDeleteAddress = (addressId: string) => {
    DeleteAddress({
      variables: {
        userId: "5f8c1f5f2927681218811212",
        addressId: addressId,
      },
    });
  };

  const handleEdit = (address: any) => {
    const selectedAddress: any = address;
    const { __typename, ...rest } = selectedAddress;
    setGqlReactiveUserAddress({ openModel: true, address: rest });
  };

  return (
    <Fragment>
      <StyledCardContainer>
        <Grid container>
          {data.map((address, index) => (
            <Grid key={index} item xs={12}>
              <AddressCard
                data={address}
                onDelete={handleDeleteAddress}
                onEdit={handleEdit}
              />
            </Grid>
          ))}
        </Grid>
      </StyledCardContainer>
    </Fragment>
  );
};

export default AddressesContainer;
