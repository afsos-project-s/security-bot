const db = require("../../models/fsociety.js")
module.exports = {
  name:"setBan",
  execute(message,args,client){

    if(!args[0]) return message.channel.send("Please send Limit")
  if(args[0] > 20)return message.channel.send(":x:  |  This index is not between 1 to 20")
console.log(args[0])
  db.findOneAndUpdate({
  GuildId:message.guild.id
  },{
 BanAdd: args[0]
  },(err,data) => {
  if(err) console.log(err)
  if(data){
  message.channel.send(":ballot_box_with_check:  | limit for banAdd is **" +  data.BanAdd + "**now")
  }
  })
  }
}