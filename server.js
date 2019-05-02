const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const seedDB = require('./scripts/seedDB')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to database... then if all good start server
mongoose.connect(
  process.env.MONGODB_URI ||
  //  "mongodb://localhost/vendorbooker", {
  "mongodb://vendorbooker:v3ndorbooker@ds059496.mlab.com:59496/heroku_rjwfngfr", {
    useNewUrlParser: true
  }
).then(() => {
  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}).catch(err => {
  console.log(err);
});
