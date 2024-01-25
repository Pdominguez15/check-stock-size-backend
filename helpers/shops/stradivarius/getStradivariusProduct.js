import getProductName from "../../getProductName.js";
import fetchApi from "../../fetchApi.js";

const mapperPullAndBear = (data, name) => {
  return data.map((product) => {
    return {
      color: product.name,
      id: product.id,
      sizes: [...new Set(product.sizes.map((size) => size.name))],
      store: "stradivarius",
      name: getProductName(name),
    };
  });
};

export const getStradivariusProduct = async (url) => {
  const json = await fetchApi(url);

  if (json.bundleProductSummaries.length > 0) {
    const name = json.name;
    const detail = json.bundleProductSummaries[0].detail.colors;

    return mapperPullAndBear(detail, name);
  } else {
    const name = json.name;
    const detail = json.detail.colors;

    return mapperPullAndBear(detail, name);
  }
};

export default getStradivariusProduct;
