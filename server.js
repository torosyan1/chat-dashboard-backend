const express = require("express");
const app = express();
const connectDB = require("./Connections/mongoDB");
const bodyParser = require("body-parser");
const cors = require("cors");
const cool = require("cool-ascii-faces");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/cool", (req, res) => res.send(cool()));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/registration", require("./API/registrationAPI"));
app.use("/login", require("./API/loginAPI"));
connectDB();

const Port = process.env.Port || 5000;
app.listen(Port, () => console.log("Server started ", `${Port}`));
