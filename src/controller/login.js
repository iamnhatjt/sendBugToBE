const users = require('../model/users')
const lesson = require('../model/lesson')
const jwt = require('jsonwebtoken')


const login = (req,res,next)=>{
    users.findOne({
        username: req.body.username,
        password: req.body.password
    })
        .then(data=>{
            if(data){
                const token = jwt.sign(data.id, 'nhatjt')
                res.json({status: 'success', message: 'loginned!', token: token})
                return;
            }
            res.json({status: 'failure', message:'you should register!'})
        })
        .catch(err=>{
            res.status(400).json('something wrong with server!')
        })
}

const register = (req,res, next)=>{
    users.findOne({
        username: req.body.username
    })
        .then((data)=>{
            if(data){
                res.json({status: 'failure', message: 'choose other name!'})
                return
            }   
            users.create({
                username: req.body.username,
                password: req.body.password
            })
            .then(()=>{
                res.json({status: 'success', message: 'registed'})
            })
            .catch(err=>{
                res.status(400).json('something wrong with server!')
            })
            
        })
}



module.exports = {login, register}