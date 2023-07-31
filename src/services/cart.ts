import { ProductTagType } from "../../apollo/common/types";
import { ProductType } from "../../apollo/hooks/useGetProductsByFilter";
import _ from "lodash";
export const getCartPayloadToAddCartItem = (product: ProductType) => {
  const payload = [
    {
      catId: product.catId,
      deliveryDays: product.deliveryDays,
      images: product.images,
      itemId: product._id,
      producttypeId: product.producttypeId,
      isPer: product.isPer,
      size: product.size,
      qty: 1,
      name: product.name,
      price: product.price,
      styling: null,
    },
  ];
  return payload;
};

export const getStylingTags = (tags: ProductTagType[]) => {
  let productTags = [];
  const modifiableTags = _.filter(tags, (tag) => {
    if (tag.isModifiable && !_.isEmpty(tag.name)) {
      return tag;
    }
  });
  if (!_.isEmpty(modifiableTags)) {
    productTags.push(modifiableTags);
  }
  return productTags;
};
