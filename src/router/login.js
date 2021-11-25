const express = require('express')
const Router = express.Router()
const {login, register} = require('../controller/login')

Router.post('/login', (req,res,next)=>{login(req,res,next)})

Router.post('/register', (req,res,next)=>{register(req,res,next)})



module.exports = Router