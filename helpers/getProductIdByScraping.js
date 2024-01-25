import * as cheerio from "cheerio";

const getProductId = async (result) => {
  const $ = cheerio.load(result);

  const $scripts = $("script[type='text/javascript'][crossorigin='anonymous']");

  const $script = $scripts.filter((_, script) =>
    $(script).text().includes("iProductId")
  );

  const productId = $script
    .text()
    .split(";")
    .filter((line) => line.includes("iProductId"))[0]
    .split("=")[1]
    .trim();

  return productId;
};

const getProductIdByScraping = async (url) => {
  //First fetch to get cookies, bm-verify and pow
  const firstResponse = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
      connection: "keep-alive",
    },
  });
  const cookiesFirstResponse = firstResponse.headers.getSetCookie();

  const data = await firstResponse.text();

  const $ = cheerio.load(data);

  const bmVerify = $('script:contains("var xhr = new XMLHttpRequest();")')
    .text()
    .match(/"bm-verify": "(.*?)"/)[1];

  const redirectUrl = $('script:contains("var xhr = new XMLHttpRequest();")')
    .text()
    .match(/"POST", "(.*?)"/)[1];

  const iValue = parseInt(
    $('script:contains("var i =")')
      .text()
      .match(/var i = (\d+);/)[1]
  );
  const concatenatedString = $('script:contains("var j = i + Number")')
    .text()
    .match(/Number\("(\d+)" \+ "(\d+)"\)/);

  const pow = iValue + Number(concatenatedString[1] + concatenatedString[2]);

  //Second fetch to validate cookies, bm-verify and pow
  const parsedUrl = new URL(url);

  const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}`;
  const newUrl = `${baseUrl}${redirectUrl}`;

  const verifyResponse = await fetch(newUrl, {
    method: "POST",
    headers: {
      Cookie: cookiesFirstResponse.join("; "),
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
      connection: "keep-alive",
    },
    body: JSON.stringify({
      "bm-verify": bmVerify,
      pow: pow,
    }),
  });

  const cookiesVerifyResponse = verifyResponse.headers.getSetCookie();

  //Third fetch to get productId with validated cookies
  const response = await fetch(url, {
    headers: {
      cookie: cookiesVerifyResponse.join("; "),
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
      connection: "keep-alive",
    },
  });

  const data3 = await response.text();

  const productId = await getProductId(data3);

  return productId;
};

export default getProductIdByScraping;
