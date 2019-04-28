const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const secondaryUserSchema = new Schema({
  petType: { type: String, required: true },
  petName: { type: String, required: true },
  petAge: { type: String, required: true },
  petBreed: { type: String, required: true },
  petWeigth: { type: String, required: true },
  petVaccines: { type: String },
  petTag: { type: String },
  petBehaviour: { type: String },
  petNotes: { type: String },
  petOwner: { type: String }
});

const SecondaryUser = mongoose.model("SecondaryUser", secondaryUserSchema);

module.exports = SecondaryUser;
