import React, { useEffect } from "react";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import CardContainer from "../../src/containers/cardContainer";
import useGetUserCartById from "../../apollo/hooks/useGetUserCartById";
import InfoCard from "../../src/components/cards/infoCard";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../src/services/enums";

const CartPage = () => {
  const router = useRouter();
  const { GetProductCartByUserId, cartData, isLoadingCartItems } =
    useGetUserCartById();

  useEffect(() => {
    GetProductCartByUserId({
      variables: {
        userId: "5f8c1f5f2927681218811212",
      },
    });
  }, []);

  return (
    <DefaultLayout appBarTitle="Cart" showBackButton={true}>
      {!isLoadingCartItems && cartData?.items.length > 0 && (
        <CardContainer data={cartData} />
      )}
      {!isLoadingCartItems && cartData?.items.length === 0 && (
        <InfoCard
          title="No Cart Items Found"
          btnName="Shop Now"
          onClickBtn={() => {
            router.push(`${APP_ROUTES.PRODUCTS}/products`);
          }}
          infoMessage="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
      )}
    </DefaultLayout>
  );
};

export default CartPage;
