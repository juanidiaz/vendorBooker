const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: () => {
    return db.Service.find({});
  },
  findById: (id) => {
    return db.Service.findById({_id: id}); 
  },
  create: (newService) => {
    return db.Service.create(newService);
  },
  deleteOne: (id) => {
    return db.Service.findOneAndDelete({_id: id});
  },
  updateOne: (id, data) => {
    return db.Service.findOneAndUpdate({ _id: id }, data);
  }
};
