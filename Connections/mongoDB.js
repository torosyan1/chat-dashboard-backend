const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;
const connectDB = async () => {
  const conn = await mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
module.exports = connectDB;
