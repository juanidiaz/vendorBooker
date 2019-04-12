const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: () => {
    return db.Service.find({});
  },
  findById: (id) => {
    return db.Service.findById({_id: id})
  },
  create: function(req, res) {
    db.Service
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Service
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Service
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
