const express = require('express');
const users = require('./routes/user');
const app = express();
app.use(users);


app.listen(3000,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("server is running on port 3000")
  }
})