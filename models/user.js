const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: String, required: false },
  userType: { type: String, default: 'user' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  address: { type: String },
  petIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "SecondaryUser"
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
