import getProductName from "../../getProductName.js";
import fetchApi from "../../fetchApi.js";

const mapperBershka = (data, name) => {
  return data.map((product) => {
    return {
      color: product.name,
      id: product.id,
      sizes: [...new Set(product.sizes.map((size) => size.name))],
      store: "bershka",
      name: getProductName(name),
    };
  });
};

const getBershkaProduct = async (url) => {
  const json = await fetchApi(url);

  if (json.products[0].bundleProductSummaries.length > 0) {
    const detail = json.products[0].bundleProductSummaries[0].detail.colors;
    const name = json.products[0].name;
    return mapperBershka(detail, name);
  } else {
    const detail = json.products[0].detail.colors;
    const name = json.products[0].name;
    return mapperBershka(detail, name);
  }
};
export default getBershkaProduct;
