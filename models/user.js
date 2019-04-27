const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: String, required: true },
  userType: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
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
