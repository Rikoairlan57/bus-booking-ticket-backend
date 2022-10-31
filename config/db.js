const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo db connection successfull");
});

db.on("error", () => {
  console.log("mongo db no connection");
});
