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
                res.json({status: 'success', message: 'loginned!'})
                return;
            }
            res.json({status: 'failure', message:'you should register!'})
        })
        .catch(err=>{
            res.status(400).json('something wrong with server!')
        })
}

const register = (req,res, next)=>{
    user.findOne({
        username: req.body.username
    })
        .then((data)=>{
            if(data){
                res.json({status: 'failure', message: 'choose other name!'})
                return
            }
            user.create({
                username: req.body.username,
                password: req.body.password
            })
            .then(()=>{
                res.json({status: 'success', message: 'registed'})
            })
            
            
        })
}



module.exports = {login, register}