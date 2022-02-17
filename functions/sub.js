/*
const db = require(".././models/db.js")

function SubCash(user,cash){
  db.findOneAndUpdate({
  user:user
  },{
  Username:user.username
  },(err,data) =>{
  if(err) console.log(err)
  if(!data){
   db.create({
    Username:user,
    User:user,
    Coins:100
   })
   data.Coins = data.Coins - cash
  Coins.save()

     }else if(data){
   data.Coins = data.Coins - cash
  Coins.save()
       
     }
  })
}

SubCash()


module.exports = SubCash*/