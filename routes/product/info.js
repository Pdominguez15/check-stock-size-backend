import getProductData from "../../helpers/getProductData.js";
import getProductUrl from "../../helpers/getProductUrl.js";

const productInfo = async (req, res) => {
  const { url } = req.body;

  try {
    const productUrl = await getProductUrl(url);

    if (productUrl) {
      const product = await getProductData(productUrl);
      res.status(200).send({ productUrl, product });
    } else {
      res.status(400).send({ error: "Error getting product id" });
    }
  } catch (error) {
    res.status(400).send({ message: "Error getting product id", error });
  }
};

export default productInfo;
