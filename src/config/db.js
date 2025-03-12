const mongoose = require("mongoose");
const env = require("dotenv").config();
let dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Data base is connected");
  } catch (error) {
    console.log("Error Occure during the connection ", error);
  }
};
dbconnection();
module.exports = {
  mongoose,
};
