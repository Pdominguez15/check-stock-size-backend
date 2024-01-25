import isBershkaUrl from "./shops/bershka/isBershkaUrl.js";
import isPullAndBearUrl from "./shops/pullAndBear/isPullAndBearUrl.js";
import isStradivariusUrl from "./shops/stradivarius/isStradivariusUrl.js";
import isZaraUrl from "./shops/zara/isZaraUrl.js";

import getZaraProduct from "./shops/zara/getZaraProduct.js";
import getStradivariusProduct from "./shops/stradivarius/getStradivariusProduct.js";
import getPullAndBearProduct from "./shops/pullAndBear/getPullAndBearProduct.js";
import getBershkaProduct from "./shops/bershka/getBershkaProduct.js";

const getProductData = async (url) => {
  if (isZaraUrl(url)) {
    const product = await getZaraProduct(url);
    return product;
  } else if (isStradivariusUrl(url)) {
    const product = await getStradivariusProduct(url);
    return product;
  } else if (isPullAndBearUrl(url)) {
    const product = await getPullAndBearProduct(url);
    return product;
  } else if (isBershkaUrl(url)) {
    const product = await getBershkaProduct(url);
    return product;
  }
};

export default getProductData;
