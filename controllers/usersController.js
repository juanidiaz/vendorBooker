const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: () => {
    return db.User.find({});
  },
  findById: (id) => {
    return db.User.findById({ _id: id }); 
  },
  findByUID: (uid) => {
    console.log('@ userController.js')
    return db.User.findOne({ 'uid': uid }); 
  },
  create: (newUser) => {
    return db.User.create(newUser);
  },
  deleteOne: (id) => {
    return db.User.findOneAndDelete({ _id: id });
  },
  updateOne: (id, data) => {
    return db.User.findOneAndUpdate({ _id: id }, data);
  }
};
