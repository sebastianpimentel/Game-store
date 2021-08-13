const Product = require("../models/product");

const registerProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.code ||
    !req.body.description
  )
    return res.status(401).send("Process failed: Incomplete data");

  const existingProduct = await Product.findOne({ name: req.body.name });
  if (existingProduct)
    return res.status(401).send("Process failed: Product is already exist");

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    description: req.body.description,
    dbStatus: true,
  });
  const result = await product.save();
  if (!result) return res.status(401).send("Falied to register product");
  return res.status(200).send({ product });
};
const listProduct = async (req, res) => {
  const product = await Product.find();
  if (!product || product.length === 0) return res.status(401).send("No product");
  return res.status(200).send({ product });
};

module.exports = { registerProduct, listProduct };
