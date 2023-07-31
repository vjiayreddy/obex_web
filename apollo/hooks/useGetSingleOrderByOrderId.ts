import { useLazyQuery } from "@apollo/client";
import { GET_SINGLE_ORDER_BY_ID } from "../queries/orders";
import {
  AddressType,
  DateFormateType,
  CartItemType,
} from "../../src/services/types";

type StatusType = {
  _id: string;
  dateRecorded: DateFormateType;
  label: string;
  note: string;
  name: string;
};
export interface ProductOrderType {
  _id: string;
  discTotal: number;
  orderId: string;
  orderTotal: string;
  orderDateTime: DateFormateType;
  address: AddressType;
  items: CartItemType[];
  completedDateTime: DateFormateType;
  confDateTime: DateFormateType;
  paidDateTime: DateFormateType;
  readyDateTime: DateFormateType;
  code: string;
  deliveryDays: number;
  disc: number;
  couponCode: string;
  email: string;
  isCaptured: boolean;
  firstName: string;
  isCompleted: boolean;
  isPaid: boolean;
  isPaymentFailed: boolean;
  isReady: boolean;
  lastName: string;
  note: string;
  status: StatusType;
}

export interface getAllUserProductOrdersParams {
  orderId: string;
}

const useGetSingleOrderByOrderId = () => {
  const [GetSingleProductOrder, { data, loading, error }] = useLazyQuery<
    {
      getSingleProductOrder: ProductOrderType;
    },
    getAllUserProductOrdersParams
  >(GET_SINGLE_ORDER_BY_ID);
  return {
    GetSingleProductOrder,
    singleOrder: data?.getSingleProductOrder || null,
    isLoadingOrder: loading,
    errorSingleOrder: error,
  };
};

export default useGetSingleOrderByOrderId;
