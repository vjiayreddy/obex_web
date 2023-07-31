import { useLazyQuery } from "@apollo/client";
import { GET_USER_CART_BY_USER_ID } from "../queries/cart";
import { CartItemType } from "../../src/services/types";

export interface GetProductCartByUserIdResponse {
  _id: string;
  items: CartItemType[];
  lid: number;
  looks_id: string;
  totalDiscount: string;
  totalDiscountedPrice: number;
  totalPrice: number;
}

const useGetUserCartById = () => {
  const [GetProductCartByUserId, { data, loading, error }] = useLazyQuery<
    { getProductCartByUserId: GetProductCartByUserIdResponse },
    { userId: string }
  >(GET_USER_CART_BY_USER_ID, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  return {
    GetProductCartByUserId,
    cartData: data?.getProductCartByUserId || null,
    isLoadingCartItems: loading,
    errorUserCart: error,
  };
};

export default useGetUserCartById;
