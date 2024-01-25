import getProductIdIfExistInUrl from "../../getProductIdIfExistInUrl.js";

const getScrapingUrl = async (productId) => {
  if (!productId) {
    return null;
  }
  return `https://www.bershka.com/itxrest/3/catalog/store/44009500/40259530/productsArray?productIds=${productId}&languageId=-5`;
};

const getBershkaScrapingUrl = async (url) => {
  const productId = getProductIdIfExistInUrl(url);

  return getScrapingUrl(productId);
};

export default getBershkaScrapingUrl;
