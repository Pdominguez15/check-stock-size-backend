import isBershkaUrl from "./shops/bershka/isBershkaUrl.js";
import isPullAndBearUrl from "./shops/pullAndBear/isPullAndBearUrl.js";
import isStradivariusUrl from "./shops/stradivarius/isStradivariusUrl.js";
import isZaraUrl from "./shops/zara/isZaraUrl.js";

import getZaraScrapingUrl from "./shops/zara/getZaraScrapingUrl.js";
import getStradivariusScrapingUrl from "./shops/stradivarius/getStradivariusScrapingUrl.js";
import getPullAndBearScrapingUrl from "./shops/pullAndBear/getPullAndBearScrapingUrl.js";
import getBershkaScrapingUrl from "./shops/bershka/getBershkaScrapingUrl.js";

const getProductUrl = async (url) => {
  if (isZaraUrl(url)) {
    const newUrl = getZaraScrapingUrl(url);
    return newUrl;
  } else if (isStradivariusUrl(url)) {
    const newUrl = await getStradivariusScrapingUrl(url);
    return newUrl;
  } else if (isPullAndBearUrl(url)) {
    const newUrl = await getPullAndBearScrapingUrl(url);
    return newUrl;
  } else if (isBershkaUrl(url)) {
    const newUrl = await getBershkaScrapingUrl(url);
    return newUrl;
  }
};

export default getProductUrl;
