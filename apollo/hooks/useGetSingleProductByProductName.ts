import { useLazyQuery } from "@apollo/client";
import { GET_SINGLE_PRODUCT_BY_PRODUCT_NAME } from "../queries/products";
import { ProductType } from "./useGetProductsByFilter";

const useGetSingleProductByProductName = () => {
    const [GetSingleProductByName, { data, error, loading }] = useLazyQuery<
        { getSingleProductByName: ProductType },
        {
            productName: string;
        }
    >(GET_SINGLE_PRODUCT_BY_PRODUCT_NAME, {
        fetchPolicy: "network-only",
    });

    return {
        GetSingleProductByName,
        singleProductData: data?.getSingleProductByName || null,
        singleProductError: error,
        isLoadingSingleProduct: loading
    };
};

export default useGetSingleProductByProductName;
