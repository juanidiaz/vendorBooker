const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  companyDescription: { type: String, required: true },
  companyLogo: { type: String, required: true },
  companyContacts: { type: String, required: true },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
