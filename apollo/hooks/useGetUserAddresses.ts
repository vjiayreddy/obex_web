import { useLazyQuery } from "@apollo/client";
import { GET_USER_ADDRESSES } from "../queries/user";
import { AddressType } from "../../src/services/types";
const useGetUserAddresses = () => {
  const [GetUserAddresses, { data, loading, error }] = useLazyQuery<
    {
      getUserAddresses: AddressType[];
    },
    { userId: string }
  >(GET_USER_ADDRESSES, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    errorPolicy:"all"
  });
  return {
    GetUserAddresses,
    allAddresses: data?.getUserAddresses || [],
    isLoadingAddresses: loading,
    errorUserAddresses: error,
  };
};

export default useGetUserAddresses;
