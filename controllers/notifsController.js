const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: () => {
    return db.Notification.find({});
  },
  findById: (id) => {
    return db.Notification.findById({_id: id}); 
  },
  create: (newNotification) => {
    return db.Notification.create(newNotification);
  },
  deleteOne: (id) => {
    return db.Notification.findOneAndDelete({_id: id});
  },
  updateOne: (id, data) => {
    return db.Notification.findOneAndUpdate({ _id: id }, data);
  }
};
