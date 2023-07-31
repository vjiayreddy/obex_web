export enum AUTH_STATE {
  LOADING = "loading",
  UNAUTHENTICATED = "unauthenticated",
  AUTHENTICATED = "authenticated",
}

export enum APP_ROUTES {
  LOGIN = "/login",
  HOME = "/",
  ON_BOARDING = "/onboarding",
  PRODUCTS = "/products",
  CART = "/cart",
  SHOP = "/shop",
  ORDERS = "/orders",
  USER_ADDRESSES = "/user/addresses",
}

export enum DP_FORM_IDS {
  FORM_5_ID = "608d42832831161efcb9a6f6",
  FORM_6_ID = "60c2fa761ede7a3740f41775",
}

export const getFormControlGroup = (id: string) => {
  const ids = [
    "60546863e0646e2994cfb7c1",
    "60546863e0646e2994cfb7c0",
    "60546863e0646e2994cfb7c2",
  ];
  if (ids.includes(id)) {
    return true;
  }
  return false;
};

export const optionsTypeIds = {
  TEXT_FIELD: "60546863e0646e2994cfb7c3",
  IMAGE_GROUP: "60546863e0646e2994cfb7bf",
  UPLOAD_PICTURE: "608d388c2831161efcb9a6f5",
  CHIP_GROUP: getFormControlGroup,
};

export enum themeModes {
  LIGHT = "light",
  DARK = "dark",
}
