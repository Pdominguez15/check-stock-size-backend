import getProductName from "../../getProductName.js";
import fetchApi from "../../fetchApi.js";

const mapperPullAndBear = (data, name) => {
  return data.map((product) => {
    return {
      color: product.name,
      id: product.id,
      sizes: [...new Set(product.sizes.map((size) => size.name))],
      store: "pullandbear",
      name: getProductName(name),
    };
  });
};

const getPullAndBearProduct = async (url) => {
  const json = await fetchApi(url);

  const name = json.name ? json.name : json.detail.description;
  const detail = json.detail.colors;

  return mapperPullAndBear(detail, name);
};

export default getPullAndBearProduct;
