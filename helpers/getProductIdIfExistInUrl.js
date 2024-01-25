const getProductIdIfExistInUrl = (url) => {
  const regex = /c0p/;
  const containsC0P = regex.test(url);
  if (containsC0P) {
    const regex = /\/[eE][sS]\/(.*?)\.html/;
    const regex2 = /c0p(\d+)/;
    const match = url.match(regex);

    const match2 = match[1].match(regex2);

    return match2[1];
  }
};

export default getProductIdIfExistInUrl;
