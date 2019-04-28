const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userType: { type: String, required: false },
  uid: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
