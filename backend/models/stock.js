const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  adress: String,
  productId: { type: mongoose.Schema.ObjectId, ref: "product" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
const stock = mongoose.model("stock", stockSchema);

module.exports = stock;
