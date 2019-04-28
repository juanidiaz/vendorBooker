const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: () => {
    return db.SecondaryUser.find({});
  },
  findById: (id) => {
    return db.SecondaryUser.findById({_id: id}); 
  },
  create: (newSecondaryUser) => {
    return db.SecondaryUser.create(newSecondaryUser);
  },
  deleteOne: (id) => {
    return db.SecondaryUser.findOneAndDelete({_id: id});
  },
  updateOne: (id, data) => {
    return db.SecondaryUser.findOneAndUpdate({ _id: id }, data);
  }
};
