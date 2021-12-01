const jwt = require('jsonwebtoken')
const users = require('../model/users')

const middleWare = (req,res,next)=>{
    if(req.body.token){
        users.findOne({
            id: jwt.verify(req.body.token, 'nhatjt')
        })
        .then(data=>{
            if(data){
                next()
            }
            else{
                res.json({status:'failure', message: 'token wrong'})
            }
        })
    }
    else{
        res.json({status: 'failure', message: `can't not get token`})
    }
}

module.exports = middleWare