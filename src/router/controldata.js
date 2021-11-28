const express = require('express')
const Router = express.Router()
const controldata = require('../controller/controldata')
const middleWare = require('../controller/middleware')

Router.post('/createlesson',(req,res,next)=>{middleWare(req,res,next)}, (req,res,next)=>{controldata.createLesson(req,res,next)} )

Router.delete('/deletelesson',(req,res,next)=>{middleWare(req,res,next)}, (req,res,next)=>{controldata.deleteLesson(req,res,next)})

Router.put('/updatelesson',(req,res,next)=>{middleWare(req,res,next)}, (req,res,next)=>{controldata.updateLesson(req,res,next)})

Router.get('/get',(req,res,next)=>{middleWare(req,res,next)}, (req,res,next)=>{controldata.getData(req,res,next)})


module.exports = Router