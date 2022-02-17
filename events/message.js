const { prefix } = require("../config.json");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prettyMilliseconds = require("pretty-ms");
const cooldowns = new Discord.Collection();





//COMMANDS //DO NOT TOUCH










module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;

  const args = message.content
    .substring(prefix.length)
    .trim()
    .split(/ +/g);
  const command =
    client.commands.get(args[0]) ||
    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));

  if (!command) return;
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

  if(command.permissions){
    let invalidPerms = []
    for(const perm of command.permissions){
      if(!validPermissions.includes(perm)){
        return console.log(`Invalid Permissions ${perm}`);
      }
      if(!message.member.hasPermission(perm)){
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length){
      return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
    }
  }
  
  try {
    args.shift();
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    var timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 5) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        const exacttime = timeLeft.toFixed(0);

        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You Have A Cooldown For \`\`${command.name}\`\``)
          .addField(
            "Time Left",
            prettyMilliseconds(parseInt(exacttime) * 1000, { verbose: true }),
            true
          );
        return message.channel
          .send(embed)
         // .catch(err => message.reply(`${err}`));
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    command.execute(message, args, client);
  } catch (error) {
    console.log(error);
    return message.channel.send("There Was An ERROR Executing This Command");
  }

};

console.log(cooldowns)