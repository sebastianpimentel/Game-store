const Stock = require("../models/stock");
const Product = require("../models/product");

const registerStock = async (req, res) => {
  if (!req.body.name || !req.body.quantity || !req.body.adress)
    return res.status(400).send("Process failed: Incomplete data");

    let existingStock = await Stock.findOne({ name: req.body.name });
    if (existingStock)
      return res.status(400).send("Process failed: Stock already exist");
  
    let product = await Product.findOne({ name: "play 5" });
  if(!product) return res.status(400).send("Process failed: not produt")
  

  let stock = new Stock({
    name: req.body.name,
    quantity: req.body.quantity,
    adress: req.body.adress,
    productId: product._id,
    dbStatus: true,
  });
  let result = await stock.save();
  if (!result) return res.status(401).send("Failed o register stock");
  return res.status(200).send({ stock });
};
const listStock = async (req, res) => {
  const stock = await Stock.find();
  if (!stock || stock.lenght === 0) return res.status(401).send("No stocks");
  return res.status(200).send({ stock });
};
module.exports = { registerStock, listStock };
