const mongoose = require("mongoose");

const Database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Dtabase Connected Succes");
  } catch (err) {
    console.log("MongoDb Connection Error" + err);
  }
};

module.exports = Database;
