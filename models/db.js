const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let schema = new Schema({
  Username : String,
  User : String,
  Guild : String ,
  Guildname:String,
  Coins : { type: Number, default : 100}
})

module.exports = mongoose.model("db",schema)
