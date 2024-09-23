const express = require('express');
const usercontroller = require('../controllers/usercontoller');
const router = express.Router();


router.get('/users',(req,res)=>{
  usercontroller.getUser(req,res);
})

router.get('/user/:id',(req,res)=>{
  usercontroller.particularUser(req,res);
})

module.exports=router;