const express = require("express");
const newUser = require("../model/registrationModel");
const app = express.Router();
const bcrypt = require("bcrypt");
const SendEmail = require("../sendEmail/registrationEmail");

app.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const salt = await bcrypt.genSalt();

  if (firstName === "" && lastName === "") {
    res.status(200).json({ msg: "Please enter your FullName" });
    return;
  }

  if (firstName === "") {
    res.status(200).json({ msg: "Please enter your firstName" });
    return;
  }

  if (lastName === "") {
    res.status(200).json({ msg: "Please enter your lastName" });
    return;
  }

  const emailExist = await newUser.findOne({ email: email });
  if (emailExist) {
    return res.status(200).json({ msg: "User already exists" });
  }

  const regExp = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExp.test(email) === false) {
    return res.status(200).json({ msg: "Invalid email address" });
  }

  if (password.length < 7) {
    return res.status(200).json({ msg: "Please enter your password" });
  }

  if (password.length < 7) {
    return res.status(200).json({ msg: "Have to put minimum 8 characters" });
  }
  let user = {};

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = await bcrypt.hash(password, salt);
  user.data = new Date();
  let userModel = new newUser(user); 
  SendEmail(); //nodeemailer
  await userModel.save();
  return res.status(200).json({ msg: "Successfull" });
});

module.exports = app;
