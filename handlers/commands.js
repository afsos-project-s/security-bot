/*const { readdirSync } = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client()
//client.commands = new Discord.Collection();

module.exports = client => {
  readdirSync("./Commands/").map(dir => {
    const commands = readdirSync(`./Commands/${dir}/`).map(cmd => {
      let pull = require(`../Commands/${dir}/${cmd}`);
      console.log(`${pull.name} Command Loaded`);
      client.commands.set(pull.name, pull);
    });
  });
};
*/