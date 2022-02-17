const db = require("../../models/fsociety.js")
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "settings",
  aliases: ['setting', 'settings'],
  execute(message, args, client) {
    db.findOne({
      GuildId: message.guild.id
    }, async (err, data) => {
      if (data) {
    
      if (!message.member.hasPermission('ADMINISTRATOR'))
            return message.channel.send('**Sorry** *You dont have the **ADMINISTRATOR** permission to access that command.*');
        let embed = new MessageEmbed()
          .setColor("#FF0000")
          .setThumbnail(message.author.avatarURL({ dynamic: true }))
          
          .setFooter(`Requested by  ${message.author.username}`)
          .setDescription(`
**Settings Security for** *${message.guild.name}*

kickLimit ➾  **${data.Kick}**  ║ 〔**${data.Kick_ED}**〕

BanLimit ➾  **${data.BanAdd}**  ║ 〔**${data.BanAdd_ED}**〕

UnBanLimit ➾  **${data.BanRev}**  ║ 〔**${data.BanRev_ED}**〕

ChannelCreateLimit ➾  **${data.ChanAdd}**  ║ 〔**${data.ChanAdd_ED}**〕

ChannelDeleteLimit ➾  **${data.ChanRev}**  ║ 〔**${data.ChanRev_ED}**〕

RoleCreateLimit  ➾  **${data.RolAdd}** ║ 〔**${data.RolAdd_ED}**}

RoleDeteleLimt  ➾  **${data.RolRev}**  ║ 〔**${data.RolRev_ED}**}

Punshment  ➾  **${data.Punshment}**

Time out ➾  **${data.Time}** *millisecond*  ║ *1h*

Anti Bot  ➾ **${data.Antibot}**`)
        message.channel.send(embed)
      }
    })
  }
                          }