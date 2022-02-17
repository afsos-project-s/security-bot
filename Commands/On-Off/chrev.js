const db = require("../../models/fsociety.js")

module.exports = {
  name:"ChanRev",
  execute(message,args,client){
   if(!args[0]) return message.channel.send("Please Type On/Off")
       const arr = args[0].toLowerCase(); 
   if(arr == "on" || arr=="off"){
    db.findOneAndUpdate({
      GuildId:message.guild.id
    },{
    ChanRev_ED:args[0]
    },async(err,data) => {
      if(err) console.log(err)
      if(data){
       message.channel.send("Update To "+args[0])
      }else{
        message.channel.send("Please Create The Data For Guild Can You Use This Command f/create")
      }
    })
   }
  }
}
