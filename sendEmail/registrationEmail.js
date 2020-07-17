require("dotenv").config();

const nodemailer = require("nodemailer");

// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chatdashboard123@gmail.com",
    pass: "chatdb123db",
  },
});

// Step 2
let mailOptions = {
  from: "chatdashboard123.@gmail.com",
  to: "torosyan252@gmail.com",
  subject: "Nodemailer - Test",
  text: "Hi ,Succsesful registration!!!!",
};

// Step 3
exports.sendEmail = transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return console.log("Error occurs", err);
  }
  return console.log("Email sent!!!");
});
