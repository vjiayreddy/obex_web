import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_FILTER } from "../queries/products";
import useGetAllOccasions from "./useGetAllOccasions";
import useGetOccasionConfig from "./useGetOccasionConfig";
import { useRouter } from "next/router";
import _ from "lodash";
import { ColorType, MasterProductType, ProductTagType } from "../common/types";

export type ProductType = {
  _id: string;
  images: string[];
  name: string;
  title: string;
  price: number;
  pid: number;
  pImgIndx: number;
  pidSerial: number;
  warranty: string;
  isAvailable: boolean;
  qty: number;
  producttypeId: string;
  size: string;
  deliveryDays: number;
  delivery: string;
  isPer: boolean;
  code: string;
  catId: string;
  discPrice: string;
  tags: ProductTagType[];
  description: string;
  fabric:MasterProductType;
  secondaryColor:ColorType
};

type params = {
  catIds?: string[];
  isAccessory: boolean;
  occasionId: string;
};
export interface GqlProductsFilterResponse {
  products: ProductType[];
  totalItemCount: number;
}

export interface GqlProductsFilterParams {
  limit: number;
  page: number;
  params: params;
}

const useGetProductsByFilter = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const router = useRouter();
  const { occasionsData, loadingAllOccasions, errorAllOccasions } =
    useGetAllOccasions();

  const {
    GetOccasionConfig,
    isLoadingOccasionConfig,
    isErrorOccasionConfig,
    occasionConfigData,
  } = useGetOccasionConfig();

  const [
    ProductsFilter,
    {
      data,
      loading: loadingProducts,
      error: errorProductsFilter,
      refetch: refetchProductFilter,
    },
  ] = useLazyQuery<
    {
      productsFilter: GqlProductsFilterResponse;
    },
    GqlProductsFilterParams
  >(GET_PRODUCTS_BY_FILTER);

  useEffect(() => {
    if (data?.productsFilter) {
      setTotalProducts(data?.productsFilter.totalItemCount);
      setProducts(data?.productsFilter?.products);
    }
  }, [data?.productsFilter]);

  useEffect(() => {
    if (occasionsData?.length > 0) {
      const matchedOccasion = _.find(
        occasionsData,
        (occasion) => router?.query?.slug[0] === occasion.name
      );
      if (matchedOccasion) {
        GetOccasionConfig({
          variables: {
            occasionId: matchedOccasion?._id,
          },
        });
      }
    }
  }, [router, occasionsData]);

  return {
    ProductsFilter,
    products,
    loadingProducts,
    errorProductsFilter,
    refetchProductFilter,
    totalProducts,
    occasionsData,
    loadingAllOccasions,
    errorAllOccasions,
    isLoadingOccasionConfig,
    isErrorOccasionConfig,
    occasionConfigData,
  };
};

export default useGetProductsByFilter;
