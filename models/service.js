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
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  specialPrice: { type: Number, required: true },
  cost: { type: Number, required: true },
  images: { type: String, required: true },
  notes: { type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
