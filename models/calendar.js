const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  secondUserId: [{
    type: Schema.Types.ObjectId,
    ref: "SecondaryUser"
  }],
  service: [{
    type: String,
    ref: "Service"
  }],
  start: {
    type: Date,
    // required: true
  },
  end: {
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