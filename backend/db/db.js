const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connectiong to mongoDB: ", e);
    throw new Error("Error connectiong to mongoDB");
  }
};
module.exports = { dbConnection };