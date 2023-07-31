export type AddressType = {
  _id: string;
  country: string;
  countryCode: string;
  email: string;
  firstName: string;
  phone:string;
  landmark: string;
  lastName: string;
  postalCode: string;
  state: string;
  streetAddress: string;
  type: string;
  city: string;
};

export type DateFormateType = {
  timestamp: string;
};

export type CartItemType = {
  catId: string;
  images: string[];
  isPer: boolean;
  itemId: string;
  measurementId?: string;
  name: string;
  pIdSerial?: number;
  price: number;
  producttypeId: string;
  qty: number;
  size: string;
  code?: string;
  couponCode?: string;
  deliveryDays: number;
  disc?: number;
};
