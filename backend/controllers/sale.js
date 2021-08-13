const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user");

const registerSale = async (req, res) => {
  if (!req.body.price)
    return res.status(400).send("Process failed: Incomplete data");

    let existingSale = await Product.findOne({name: req.body.name})
    if(existingSale)
    return res.status(400).send("Process failed: product is already registered")

  let user = await User.findOne({ name: "Beatriz pimentel" });
  let product = await Product.findOne({ name: "grand thefh auto V" });
  if (!product)
    return res.status(400).send("Process failed: not product assigned");

  const sale = new Sale({
    price: req.body.price,
    productId: product._id,
    userId: user._id,
    dbStatus: true,
  });
  let result = await sale.save();
  if (!result) return res.status(400).send("Failed to register sale");
  return res.status(200).send({ sale });
};
const listSale = async (req, res) => {
  const sale = await Sale.find();
  if (!sale || sale.length === 0) return res.status(401).send("No sale");
  return res.status(200).send({ sale });
};
module.exports = { registerSale, listSale };
