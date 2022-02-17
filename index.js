
const Discord = require("discord.js");
const { Intents } = require("discord.js");
const { default_prefix } = require("./config.json");
const mongoose = require("mongoose")
const db = require("./models/fsociety.js")
mongoose.connect("mongodb+srv://hama:robotdj@fsociety.hpq5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => {
    console.log(chalk.green("connected t DB"));
  })
  .catch(err => {
    console.log(chalk.red(err));
  });


//const CurrencySystem = require("currency-system");
//const cs = new CurrencySystem();
const chalk = require("chalk");
const {
  Client,
  Collection,
  MessageEmbed,
  MessageAttachment
} = require(`discord.js`);
//const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });

const client = new Client({ ws: {}, restRequestTimeout: 30000,restTimeOffset: 0, rateLimitAsError: true, disableMentions: "everyone", })

const handler = require("./handlers/commands.js");
const fs = require("fs");
const prefix = "1"
const config = require("./config.json");

const DB_NAME = "MyDataBase"; //You Change This
module.exports = {
  DB_NAME: DB_NAME
};
const Canvas = require("canvas")
const fetch = require("node-fetch")

setInterval(() =>{
  fetch("https://ribbon-eminent-silk.glitch.me").then()
} ,1000)
//const db = require("quick.db");
const { token } = require("./config.json");
//handler(client);
const { readdirSync } = require("fs");
const { join } = require("path");
client.commands = new Collection();
client.queue = new Map();

const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[ \]\\]/g, "\\$&");


  readdirSync("./Commands/").map(dir => {
    const commands = readdirSync(`./Commands/${dir}/`).map(cmd => {
      let pull = require(`./Commands/${dir}/${cmd}`);
      console.log(`${pull.name} Command Loaded`);
      client.commands.set(pull.name, pull);
    });
  });

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

 


fs.readdir("./events", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    //client.commands.set(command.name, command);
    delete require.cache[require.resolve(`./events/${file}`)];
/*
    client.on("ready", () => {
      setInterval(() => {
        client.user.setActivity(`Zhelp | 1378/1500 servers!`);
      }, 1000);
    });*/
    //DO NOT TOUCH
    client.on(`warn`, info => console.log(info));
    //DO NOT TOUCH
    client.on(`error`, console.error);
      });

})



      
client.on("message", message => {
if(message.content === "h"){
if (client.user.verified){
  console.log(message.author.tag+" ture")
} else {
  console.log("false")
}
}
})

client.on("message", async (message) => {
    if(message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase()

    if(message.content == "png"){
        const user = message.mentions.users.first() || message.author;
      
        const canvas = Canvas.createCanvas(1000, 500)
        const ctx = canvas.getContext("2d");
      
        //draw the main background
        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/849276102706331708/850289649154260992/unknown.png")
        ctx.drawImage(background, 0, 0, 1000, 500)
      
        //draw the second background which is a blacksquare 
        const background2 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/849276102706331708/850290182280183818/unknown.png")
        ctx.globalAlpha  = 0.3; //changes the alpha before you draw the image
        ctx.drawImage(background2, 100, 100, 1000-200, 500-200)
      
        //change opacity again
        ctx.globalAlpha  = 1;
      
        // Draw the USER AVATAR
        const image = await Canvas.loadImage(user.displayAvatarURL({format: "png"}))
        ctx.drawImage(image, 50, 500/2 - 350/2, 350, 350)

      
        //WRITE THE USERNAME
        ctx.font = '75px Impact'
        ctx.fillStyle = "#FFFFF9"
        ctx.fillText(user.username, 420, 500/2 + 75/2)

        ctx.fillStyle = "#FFee00";

      
        //BACKGROUND OF THE BAR
        ctx.beginPath();
        ctx.moveTo(50, 450)
        ctx.lineTo(1000 - 50, 450)
        ctx.lineTo(1000 - 50, 455)
        ctx.lineTo(50, 455)
        ctx.closePath();
        ctx.fill()
        ctx.restore();
      
        //CHANGED THE FILL COLOR TO GREEN
        ctx.fillStyle = "#00FF00";
      
      
        //RANKING MATHS
        const points = 300;
        const neededpoints = 500;
        const percent = points/neededpoints;

      
        //DRAW THE BAR
        ctx.beginPath();
        ctx.moveTo(50, 450)
        ctx.lineTo((1000 - 50) * percent, 450)
        ctx.lineTo((1000 - 50) * percent, 455)
        ctx.lineTo(50, 455)
        ctx.closePath();
        ctx.fill()
        ctx.restore();

        //DRAWED THE RANKING POINTS
        ctx.font = '50px Impact'
        ctx.fillText(points + " / " + neededpoints, 50, 445)

        //ctx.drawImage(image, x, y, imagewidth, imagelength)
      
        //send the image as an attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "https://media.discordapp.net/attachments/888480896611667998/892436217008910356/20210823_101616.jpg")
        message.channel.send(`Rank of: ${user.tag}`, attachment)
    }
})
var countChAdd = 0,countChDel = 0,CountRoleC = 0, CountRoleD =0,CountBanAdd = 0, CountBanRev =0,CountKick=0,CountAntiBot = 0;
client.on("channelCreate", async(channel) => {
db.findOne({
GuildId:channel.guild.id
}, async(err,data) => {
  if(data){
  let logs = await channel.guild.fetchAuditLogs({
    type:"CHANNEL_CREATE"
  }) 
let log =await logs.entries.first()
let {executor,id} = log;
  if(data.ChanAdd_ED == "off") return countChAdd = 0
if(data.ChanAdd_ED == "on"){
if(executor.id) countChAdd++;
if(countChAdd == data.ChanAdd){
  if(data.Punshment == "ban") {
channel.guild.members.ban(executor.id)
countChAdd = 0;
} else if(data.Punshment == "kick"){
channel.guild.members.kick(executor.id)
countChAdd = 0;
}}
}
}
})
})

client.on("channelDelete", async(channel) => {
db.findOne({
GuildId:channel.guild.id
}, async(err,data) => {
  if(data){
  let logs = await channel.guild.fetchAuditLogs({
    type:"CHANNEL_DELETE"
  }) 
let log =await logs.entries.first()
let {executor,id} = log;
  if(data.ChanRev_ED == "off") return CountChRev = 0
if(data.ChanRev_ED == "on"){

if(executor.id) countChDel++;
if(countChDel == data.ChanRev){
  if(data.Punshment == "ban") {
channel.guild.members.ban(executor.id)
countChDel = 0;
} else if(data.Punshment == "kick"){
channel.guild.members.kick(executor.id)
countChDel = 0;
}}
}
  }
})
})


client.on("roleCreate", async(role) => {
db.findOne({
  GuildId:role.guild.id
}, async(err,data) => {
  if(data){
let Audit = await role.guild.fetchAuditLogs({
  type:"ROLE_CREATE"
})
let Logs = Audit.entries.first()
let {executor,target} = Logs;

  if(err) console.log(err)
  if(executor.id) CountRoleC ++
  if(data.RolAdd_ED == "off") return CountRoleC = 0;
  if(data.RolAdd_ED == "on"){
  setTimeout(() => {
  CountRoleC = 0
  },data.Time)
  if(CountRoleC == data.RolAdd){
   if(data.Punshment == "ban"){
    role.guild.members.ban(executor.id)
 CountRoleC = 0    
   } else if(data.Punshment == "kick"){
    role.guild.members.kick(executor.id)
  CountRoleC = 0
   }
  }
  }
  }else {
    console.log("dont have dataBase")
  }
}


)})


client.on("roleDelete", async(role) => {
db.findOne({
  GuildId:role.guild.id
}, async(err,data) => {
  if(data){
let Audit = await role.guild.fetchAuditLogs({
  type:"ROLE_DELETE"
})
let Logs = Audit.entries.first()
let {executor,target} = Logs;

  if(err) console.log(err)

  if(executor.id) CountRoleD ++
  if(data.RolRev_ED == "off") return CountRoleD = 0;
  if(data.RolRev_ED == "on"){
  setTimeout(() => {
  CountRoleD = 0
  },data.Time)
  if(CountRoleD == data.RolAdd){
   if(data.Punshment == "ban"){
    role.guild.members.ban(executor.id)
    CountRoleD = 0
   } else if(data.Punshment == "kick"){
    role.guild.members.kick(executor.id)
     CountRoleD = 0
   }
  }
  }
  }else {
    console.log("dont have dataBase")
  }
  }
)
})
client.on("guildBanAdd", async(guild,user) => {
db.findOne({
  GuildId:guild.id
}, async(err,data) => {
  if(data){
let Audit = await guild.fetchAuditLogs({
  type:"ROLE_CREATE"
})
let Logs = Audit.entries.first()
let {executor,target} = Logs;

  if(err) console.log(err)

  if(executor.id) CountRoleC ++
  if(data.BanAdd_ED == "off") return CountBanAdd = 0;
  if(data.BanAdd_ED == "on"){
  setTimeout(() => {
  CountBanAdd = 0
  },data.Time)
  if(CountRoleC == data.BanAdd){
   if(data.Punshment == "ban"){
    guild.members.ban(executor.id)
  CountRoleC = 0
   } else if(data.Punshment == "kick"){
    guild.members.kick(executor.id)
 CountRoleC = 0
   }
  }
  }
  }else {
    console.log("dont have dataBase")
  }
  }
)
})

client.on("guildBanRemove", async(guild,user) => {
db.findOne({
  GuildId:guild.id
}, async(err,data) => {
  if(data){
let Audit = await guild.fetchAuditLogs({
  type:"MEMBER_BAN_REMOVE"
})
let Logs = Audit.entries.first()
let {executor,target} = Logs;

  if(err) console.log(err)

  if(executor.id) CountBanRev ++
  if(data.RolAdd_ED == "off") return CountBanRev = 0;
  if(data.RolAdd_ED == "on"){
  setTimeout(() => {
  CountBanRev = 0
  },data.Time)
  if(CountBanRev == data.BanRev){
   if(data.Punshment == "ban"){
    guild.members.ban(executor.id)
  CountRoleC = 0
   } else if(data.Punshment == "kick"){
    guild.members.kick(executor.id)
   CountRoleC = 0
   }
  }
  }
  }else {
    console.log("dont have dataBase")
  }
  }
)
})

client.on("guildMemberRemove", async(member) => {
db.findOne({
GuildId:member.guild.id
}, async(err,data) => {
  if(data){
  let logs = await member.guild.fetchAuditLogs({
    type:"CHANNEL_CREATE"
  }) 
let log =await logs.entries.first()
let {executor,id} = log;
  if(data.ChanAdd_ED == "off") return countChAdd = 0
if(data.ChanAdd_ED == "on"){
if(executor.id) countChAdd++;
if(countChAdd == data.ChanAdd){
  if(data.Punshment == "ban") {
channel.guild.members.ban(executor.id)
countChAdd = 0;
} else if(data.Punshment == "kick"){
channel.guild.members.kick(executor.id)
countChAdd = 0;
}}
}
}
})
})

client.login(token);
