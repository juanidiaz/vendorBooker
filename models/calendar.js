const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  title: {
    type: String,
    ref: "title"
  },
    start: {
    type: String,
    // required: true
  },
  end: {
    type: String,
    // required: true
  },
  userID: {
    type: String
  },
  petID: {
    type: String
  },
  serviceID: {
    type: String
  },
  confirmed: {
    type: Boolean,
    // required: true
  },
  notes: { type: String },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;