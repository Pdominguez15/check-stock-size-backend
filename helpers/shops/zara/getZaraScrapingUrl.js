const getZaraScrapingUrl = (url) => {
  return url.includes("?") ? `${url}&ajax=true` : `${url}?ajax=true`;
};

export default getZaraScrapingUrl;
