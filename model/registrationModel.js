const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  data: {
    type: String,
  },
});

const newUser = mongoose.model("user", user);
module.exports = newUser;
