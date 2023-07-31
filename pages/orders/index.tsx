import React, { useEffect } from "react";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import OrdersContainer from "../../src/containers/ordersContainer";
import useGetAllOrders from "../../apollo/hooks/useGetAllOrders";
import CircularLoadingIndication from "../../src/components/loadingIndicators/circularLoadingIndication";
import InfoCard from "../../src/components/cards/infoCard";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../src/services/enums";

const OrdersPage = () => {
  const router = useRouter();
  const {
    getAllUserProductOrders,
    isLoadingOrders,
    errorAllOrders,
    allOrders,
  } = useGetAllOrders();

  useEffect(() => {
    getAllUserProductOrders({
      variables: {
        userId: "5f8c1f5f2927681218811212",
        limit: 100,
        page: 1,
      },
    });
  }, []);

  return (
    <DefaultLayout appBarTitle="Orders" showBackButton={true}>
      {isLoadingOrders && allOrders.length < 0 && <CircularLoadingIndication />}
      {!isLoadingOrders && allOrders.length > 0 && (
        <OrdersContainer data={allOrders} />
      )}
      {!isLoadingOrders && allOrders.length < 0 && (
        <InfoCard
          title="No Orders Found"
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

export default OrdersPage;
