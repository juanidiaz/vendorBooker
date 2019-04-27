const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  title: {
    type: String,
    ref: "title"
  },
  // vendorId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Vendor"
  // },
  // petId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "SecondaryUser"
  // },
  // skuId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Service"
  // },
  start: {
    type: String,
    // required: true
  },
  end: {
    type: String,
    // required: true
  },
  // status: {
  //   type: String,
  //   // required: true
  // },
  // notes: { type: String },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;