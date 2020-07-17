const express = require("express");
const app = express();
const connectDB = require("./Connections/mongoDB");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/registration", require("./API/registrationAPI"));
app.use("/login", require("./API/loginAPI"));
connectDB();

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build/index.js"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server startedddddddd ", `${PORT}`));
