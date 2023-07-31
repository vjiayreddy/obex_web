import { gql } from "@apollo/client";
import { USER_ADDRESS } from "../fragments";

export const GET_USER_ADDRESSES = gql`
  ${USER_ADDRESS}
  query GetUserAddresses($userId: String!) {
    getUserAddresses(userId: $userId) {
      ...Address
    }
  }
`;

export const SAVE_USER_ADDRESS = gql`
  mutation SaveAddress($address: UserAddressInput!) {
    saveAddress(address: $address) {
      _id
    }
  }
`;

export const DELETE_ADDRESS = gql`
  mutation DeleteAddress($addressId: String!, $userId: String!) {
    deleteAddress(addressId: $addressId, userId: $userId)
  }
`;
