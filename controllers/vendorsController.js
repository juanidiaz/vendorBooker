const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: () => {
    return db.Vendor.find({});
  },
  findById: (id) => {
    return db.Vendor.findById({_id: id}); 
  },
  create: (newVendor) => {
    return db.Vendor.create(newVendor);
  },
  deleteOne: (id) => {
    return db.Vendor.findOneAndDelete({_id: id});
  },
  updateOne: (id, data) => {
    return db.Vendor.findOneAndUpdate({ _id: id }, data);
  }
};
