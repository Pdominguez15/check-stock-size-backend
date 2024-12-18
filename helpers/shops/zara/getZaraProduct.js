import getProductName from "../../getProductName.js";
import fetchApi from "../../fetchApi.js";
import * as cheerio from "cheerio";

const getZaraProduct = async (url) => {
  try {
    const firstResponse = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
        connection: "keep-alive",
      },
    });

    if (!firstResponse.ok) {
      throw new Error(`Fetch failed with status: ${firstResponse.status}`);
    }

    const data = await firstResponse.text();
    const $ = cheerio.load(data);

    // Assuming we have a static product name for demonstration
    const productName = "Jeans trf wide leg cinturilla cruzada tiro alto";

    const products = [];

    // Extract colors
    $(".product-detail-color-selector__colors > li").each((_, colorElement) => {
      const color = $(colorElement).find(".screen-reader-text").text().trim();

      // Extract sizes
      const sizes = [];
      $(".size-selector-sizes .size-selector-sizes__size").each(
        (_, sizeElement) => {
          const sizeLabel = $(sizeElement)
            .find(".size-selector-sizes-size__label")
            .text()
            .trim();
          sizes.push(sizeLabel);
        }
      );

      products.push({
        color,
        sizes,
      });
    });

    return {
      productUrl: url,
      store: "zara",
      name: productName,
      product: products,
    };
  } catch (error) {
    console.error("Error fetching Zara product:", error);
    throw new Error("Failed to fetch product details.");
  }
};

export default getZaraProduct;
