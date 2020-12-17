require("dotenv").config();
const mongoose = require("mongoose");
const {MONGO_URI}= require('../config/keys');

//Mongo Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

//Mongoose connection object
const db = mongoose.connection;
console.log(db);
console.log(process.env.JWT_SECRET);

//Setup event listener that will fire once the connection opens for the database
//Log to the terminal what host and port we on.

db.once("open", () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("error", (error) => {
  console.log(`Database error\n ${error}`);
});

// const User= requir('./User')
// module.exports = User;

//Same thing \/
// module.exports.User=require('./User')
