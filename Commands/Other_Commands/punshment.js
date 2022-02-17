const db = require("../../models/fsociety.js")
module.exports = {
  name:"punshment",
  execute(message,args,client){
  if(!args[0]) return message.channel.send("what you wanna my Punishment be when i take any action  **kick** Or **ban**")
   
 const arr = args[0].toLowerCase();   
  if(arr=="kick"||arr == "ban"){
    console.log("krde")
  db.findOneAndUpdate({
  GuildId:message.guild.id,
  },{
  Punshment:args[0]
  },(err,data) => {
  if(err) console.log(err)
  if(data){
   message.channel.send("**punshment is " + args[0] + "now**")
  }
  })
  }
  }
}
