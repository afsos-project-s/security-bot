const Discord = require("discord.js")
const db = require("../../models/security.js");



module.exports = {
    name: '',
    description: 'Enables auto role for give role who join server',
    aliases: ['auto role'],


 run: async (client, message, args) => {
db.findOne({
 GuildId:message.guild.id
},(err,data) => {
if(err) console.log(err)
if(!data){
db.create({
    GuidName: message.guild.name,
    GuildId: message.guild.id,
    Punshment: "ban",
    BanAdd: 2,
    BanRev: 2,
    Kick: 2,
    ChanAdd: 2,
    ChanRev:2,
    RolAdd:2,
    RolRev:2,
    Antibot: "on",
    BanAdd_ED: "on",
    BanRev_ED: "on",
    Kick_ED:"on",
    ChanAdd_ED: "on ",
    ChanRev_ED: "on",
    RolAdd_ED: "on",
    RolRev_ED: "on",
})
message.channel.send(":ballot_box_with_check: | database created")
} else {
message.channel.send(":x: | the database already created")
}
})
}}




const Schema = require('../../models/security.js')

module.exports = {
  name: 'ghostping',
  description: "Enable/Disable Anti Ghost Ping",
  aliases: ['gp'],
  usage: '<enable/disable>',
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You do not have the permission \`MANAGE_SERVER\``)
    if (!message.channel.permissionsFor(message.guild.me).has(["SEND_MESSAGES"])) return message.member.send(`I do not have the permission \`MANAGE_SERVER\``)

    options = [
      'enable',
      'disable'
    ]

    if (!args.length) return message.channel.send("Please enter either **enable** or **disable**")
    const opt = args[0].toLowerCase();
    if (!opt) return message.channel.send('Please enter either **enable** or **disable**')


    if (!options.includes(opt)) return message.channel.send('Please enter either **enable** or **disable**')

    if (opt == 'enable') {
      Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
        if (data) return message.channel.send(`:x: **security** Module is enabled already`)
        new Schema({
          GuidName: message.guild.name,
            GuildId: message.guild.id,
            Punshment: "ban",
            BanAdd: 2,
            BanRev: 2,
            Kick: 2,
            ChanAdd: 2,
            ChanRev: 2,
            RolAdd: 2,
            RolRev: 2,
            Antibot: "on",
            BanAdd_ED: "on",
            BanRev_ED: "on",
            Kick_ED: "on",
            ChanAdd_ED: "on ",
            ChanRev_ED: "on",
            RolAdd_ED: "on",
            RolRev_ED: "on",
        }).create()
        message.channel.send(` **security** has been enabled.`)
      })
    }

    if (opt == 'disable') {
      Schema.findOne({ GuildId: message.guild.id }, async (err, data) => {
        if (!data) return message.channel.send(` **security** is disabled already`)
        data.delete()
        message.channel.send(` **security** has been disabled.`)
      })
    }

  }
}