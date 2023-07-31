import { makeVar } from "@apollo/client";
import { AddressType } from "../../src/services/types";
import { getOccasionsResponse } from "../hooks/useGetAllOccasions";
export const themeModeVar = makeVar("light");
export const reactiveNavMenus = makeVar<getOccasionsResponse[]>([]);
export const setGlobalGqlErrorState = makeVar(null);
export const setGqlReactiveUserAddress = makeVar<{
  openModel: boolean;
  address: AddressType;
}>(null);
