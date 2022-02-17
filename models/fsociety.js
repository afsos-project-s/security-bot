const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  GuidName: String,
  GuildId: Number,
  Punshment: { type: String, default: "ban" },
  BanAdd: { type: Number, default: 2 },
  BanRev: { type: Number, default: 2 },
  Kick: { type: Number, default: 2 },
  ChanAdd: { type: Number, default: 2 },
  ChanRev: { type: Number, default: 2 },
  RolAdd: { type: Number, default: 2 },
  RolRev: { type: Number, default: 2 },
Time:{type: Number, default: 3600000},
  Antibot: String,
  BanAdd_ED: String,
  BanRev_ED: String,
  Kick_ED: String,
  ChanAdd_ED: String,
  ChanRev_ED: String,
  RolAdd_ED: String,
  RolRev_ED: String,
})

module.exports = mongoose.model("fsociety", schema)