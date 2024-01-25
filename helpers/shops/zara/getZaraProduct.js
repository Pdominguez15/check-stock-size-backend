import getProductName from "../../getProductName.js";
import fetchApi from "../../fetchApi.js";

const mapperZara = (data, name) => {
  return data.map((product) => {
    return {
      color: product.name,
      id: product.productId.toString(),
      sizes: [...new Set(product.sizes.map((size) => size.name))],
      store: "zara",
      name: getProductName(name),
    };
  });
};

const getZaraProduct = async (url) => {
  const json = await fetchApi(url);

  const name = json.product.name;
  const detail = json.product.detail.colors;

  return mapperZara(detail, name);
};

export default getZaraProduct;
