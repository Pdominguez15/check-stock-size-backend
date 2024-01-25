import getProductIdIfExistInUrl from "../../getProductIdIfExistInUrl.js";
import getProductIdByScraping from "../../getProductIdByScraping.js";

const getScrapingUrl = async (productId) => {
  if (!productId) {
    return null;
  }
  return `https://www.stradivarius.com/itxrest/2/catalog/store/54009550/50331075/category/0/product/${productId}/detail?languageId=-5&appId=1`;
};

const getStradivariusScrapingUrl = async (url) => {
  const productId = getProductIdIfExistInUrl(url);

  if (productId) {
    return getScrapingUrl(productId);
  }

  const productIdByScraping = await getProductIdByScraping(url);

  return getScrapingUrl(productIdByScraping);
};

export default getStradivariusScrapingUrl;
