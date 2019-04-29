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
  userEmail: {
    type: String
  },
  secondaryUserName: {
    type: String
  },
  status: {
    type: Boolean,
    // required: true
  },
  userEmail:{
    type: String
  },
  notes: { type: String },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;