const getZaraScrapingUrl = (url) => {
  const validUrl = url.replace("share", "es/es");
  return validUrl.includes("?")
    ? `${validUrl}&ajax=true`
    : `${validUrl}?ajax=true`;
};

export default getZaraScrapingUrl;
