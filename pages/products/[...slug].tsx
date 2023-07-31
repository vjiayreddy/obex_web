import { useEffect, useState } from "react";
import useGetProductsByFilter from "../../apollo/hooks/useGetProductsByFilter";
import { useRouter } from "next/router";
import ProductsRenderContainer from "../../src/containers/productsRenderContainer";
import DefaultLayout from "../../src/components/layout/defaultLayout";
import ProductsFilterBar from "../../src/components/navBar/productsFilterBar";
import DefaultDialog from "../../src/components/common/defaultDialog";
import {
  getOccasionByCategoryName,
  getProductFiltersRouterQueries,
} from "../../src/services/products";
import ProductsFiltersContainer from "../../src/containers/productsFiltersContainer";
import { APP_ROUTES } from "../../src/services/enums";

const HomePage = () => {
  const router = useRouter();
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const {
    ProductsFilter,
    loadingProducts,
    products,
    totalProducts,
    occasionsData,
    occasionConfigData,
  } = useGetProductsByFilter();

  useEffect(() => {
    if (occasionsData?.length > 0) {
      ProductsFilter({
        variables: {
          page: Number(router?.query?.page) || 1,
          limit: 50,
          params: {
            occasionId: getOccasionByCategoryName(
              occasionsData,
              router?.query?.slug[0] as string
            )._id,
            catIds: getOccasionByCategoryName(
              occasionsData,
              router?.query?.slug[0] as string
            ).catIds,
            isAccessory: false,
          },
        },
      });
    }
  }, [router, occasionsData]);

  const handleChangeCategories = (data: any) => {
    if (data) {
      router.push({
        pathname: `${APP_ROUTES.PRODUCTS}/${data.name}`,
        query: {
          page: 1,
        },
      });
    }
  };

  const handleChangePagination = (_, page: number) => {
    router.push(
      {
        pathname: `${APP_ROUTES.PRODUCTS}/${router?.query?.slug[0]}`,
        query: {
          page: page,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const handleFilters = (data: any) => {
    const filters = getProductFiltersRouterQueries(occasionConfigData, data);
    const { slug, ...rest } = router.query;
    router.push(
      {
        pathname: `${APP_ROUTES.PRODUCTS}/${slug[0]}`,
        query: {
          ...rest,
          ...filters,
        },
      },
      undefined,
      { shallow: true }
    );
    setOpenFilters(false);
  };

  return (
    <DefaultLayout
      appBarTitle="Products"
      toolBarOptionalNode={
        <>
          {occasionsData?.length > 0 && (
            <ProductsFilterBar
              defaultCategoryValue={getOccasionByCategoryName(
                occasionsData,
                router?.query?.slug[0] as string
              )}
              onChangeCategories={handleChangeCategories}
              occasionsData={occasionsData}
              onClickFilter={() => {
                setOpenFilters(true);
              }}
              totalProducts={totalProducts}
              limitPerPage={50}
              page={(router?.query?.page as string) || 1}
            />
          )}
        </>
      }
    >
      <ProductsRenderContainer
        defaultPage={Number(router?.query?.page) || 1}
        count={Math.ceil(totalProducts / 50)}
        products={products}
        isProductLoading={loadingProducts}
        onChange={handleChangePagination}
      />
      <DefaultDialog
        dialogProps={{ open: openFilters, fullScreen: true }}
        onClose={() => setOpenFilters(false)}
      >
        <ProductsFiltersContainer
          filtersData={occasionConfigData}
          onSubmit={handleFilters}
        />
      </DefaultDialog>
    </DefaultLayout>
  );
};
export default HomePage;
