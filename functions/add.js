module.exports = (message)=>  {

const db = require("../models/db.js")

function addCash(user,cash){
  db.findOneAndUpdate({
  user:user.id
  },(err,data) =>{
  if(err) console.log(err)
  if(!data){
   db.create({
    Username:user.username,
    User:user.id,
    Guild:message.guild.id,
    Guildname:message.guild.name,
    Coins:100
   })
  } else {
   data.Coins = data.Coins + cash;
 Coins.save();
  }
  })
}

}


