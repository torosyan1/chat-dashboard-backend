const express = require("express");
const User = require("../model/registrationModel");
const app = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  //stugum enq ardyoq ka grancvac ayd email ov user
  if (user === null) {
    return res.status(200).send({ msg: "Not found account" });
  }

  // hashavorvac passwordy stugum enq useri mutqagrac passwordin havasar e te voch
  await bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
        res.status(200).send({
          massege: "Auth successful",
          firstName: user.firstName,
          lastName: user.lastName,
          token: token,
          id: user.id,
        });
      });
    } else {
      res.status(200).send({ msg: "Password or Email error" });
    }
  });
});

module.exports = app;
