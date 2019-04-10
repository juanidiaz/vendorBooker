const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const secondaryUserSchema = new Schema({
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  petTag: { type: String },
  petType: { type: String, required: true },
  petName: { type: String, required: true },
  petBreed: { type: String, required: true },
  petAge: { type: String, required: true },
  petWeigth: { type: String, required: true },
  petBehaviour: { type: String },
  petVaccines: { type: String },
  petNotes: { type: String },
});

const SecondaryUser = mongoose.model("SecondaryUser", secondaryUserSchema);

module.exports = SecondaryUser;
