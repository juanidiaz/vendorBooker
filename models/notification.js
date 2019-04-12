const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
    message: {
        type: String,
        required: true
    },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;