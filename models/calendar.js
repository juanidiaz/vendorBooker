const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  vendorId: [{
    type: Schema.Types.ObjectId,
    ref: "Vendor"
  }],
  petId: [{
    type: Schema.Types.ObjectId,
    ref: "SecondaryUser"
  }],
  skuId: [{
    type: Schema.Types.ObjectId,
    ref: "Service"
  }],
  startTime: {
    type: Date,
    // required: true
  },
  endTime: {
    type: Date,
    // required: true
  },
  status: {
    type: String,
    // required: true
  },
  notes: { type: String },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;