const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  price: Number,
  productId: { type: mongoose.Schema.ObjectId, ref: "product" },
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
const sale = mongoose.model("sale", saleSchema);

module.exports = sale;
