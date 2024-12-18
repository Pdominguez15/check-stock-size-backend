import getProductData from "../../helpers/getProductData.js";
import getProductUrl from "../../helpers/getProductUrl.js";

const productInfo = async (req, res) => {
  const { url } = req.body;
  let productUrl;

  try {
    productUrl = await getProductUrl(url);

    if (productUrl) {
      const product = await getProductData(productUrl);
      res.status(200).send({ productUrl, product });
    } else {
      res.status(400).send({ message: "Error getting productUrl", url });
    }
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error getting product data", url, productUrl, error });
  }
};

export default productInfo;
