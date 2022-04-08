const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  id: String,
  name: String,
  surname: String,
  email: String,
  bank: String,
});

module.exports = mongoose.model("Staff", StaffSchema);
