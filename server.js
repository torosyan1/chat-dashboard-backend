const express = require("express");
const app = express();
const connectDB = require("./Connections/mongoDB");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/registration", require("./API/registrationAPI"));
app.use("/login", require("./API/loginAPI"));
connectDB();

const Port = process.env.Port || 5000;
app.listen(Port, () => console.log("Server started ", `${Port}`));
