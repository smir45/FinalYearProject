const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({error:"Null token"});
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      if (error) return res.status(403).json({error : error.message});
      req.user = user;
      next();
    });
  }
  
  export {authenticateToken};


  module.exports.googleAuth = (req, res, next) => {
    try{
      res.send("googleAuth");
    }catch(err){
      console.log(err)
    }
  }