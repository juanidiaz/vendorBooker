const db = require("../models");

// Defining methods for the CalendarController
module.exports = {
  findAll: () => {
    return db.Calendar.find({});
  },
  findById: (id) => {
    return db.Calendar.findById({_id: id}); 
  },
  create: (newCalendar) => {
    return db.Calendar.create(newCalendar);
  },
  deleteOne: (id) => {
    return db.Calendar.findOneAndDelete({_id: id});
  },
  updateOne: (id, data) => {
    return db.Calendar.findOneAndUpdate({ _id: id }, data);
  }
};
