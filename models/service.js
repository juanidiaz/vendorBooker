const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  vendorId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vendor"
    }
  ],
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, default: 90 },
  price: { type: Number, required: true },
  specialPrice: { type: Number },
  cost: { type: Number },
  images: { type: String, default: 'servs_nopic.jpg' },
  notes: { type: String },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
