const db = require("../../models/fsociety.js")

module.exports = {
  name: "setUnban",
  execute(message, args, client) {

    if (!args[0]) return message.channel.send("Please Type The Limit")
    if (args[0] > 20 || args[0] < 1) return message.channel.send(":x:  |  This index is not between 1 to 20");
    if (!parseInt(args[0])) return message.channel.send('Please Type The Numbet For Limit')

    db.findOneAndUpdate({
      GuildId: message.guild.id
    }, {
      BanRev: args[0]
    }, (err, data) => {
      if (err) console.log(err)
      if (data) {
        message.reply(":ballot_box_with_check:  | update to " +args[0])
      } else {
        message.channel.send("Please Create The Data For Guild Can You Use This Command f/create")
      }
    })
  }
}