const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  companyName: { type: String, required: true },
  companyAddress: { type: String, },
  companyDescription: { type: String },
  companyLogo: { type: String },
  companyContacts: { type: String },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
