const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const schema = new Schema({
  Username:String,
  User:Number,
})


module.exports = mongoose.model("fast",schema)