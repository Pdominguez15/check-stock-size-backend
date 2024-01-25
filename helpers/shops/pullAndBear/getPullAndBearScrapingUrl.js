import getProductIdByScraping from "../../getProductIdByScraping.js";
import getProductIdIfExistInUrl from "../../getProductIdIfExistInUrl.js";

const getScrapingUrl = async (productId) => {
  if (!productId) {
    return null;
  }
  return `https://www.pullandbear.com/itxrest/2/catalog/store/24009400/20309422/category/0/product/${productId}/detail?languageId=-5&appId=1`;
};

const getPullAndBearScrapingUrl = async (url) => {
  const productId = getProductIdIfExistInUrl(url);

  if (productId) {
    return getScrapingUrl(productId);
  }

  const productIdByScraping = await getProductIdByScraping(url);

  return getScrapingUrl(productIdByScraping);
};

export default getPullAndBearScrapingUrl;
