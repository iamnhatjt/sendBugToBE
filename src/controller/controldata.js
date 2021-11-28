const lesson = require('../model/lesson')
const jwt = require('jsonwebtoken')

 

const createLesson = (req,res,next)=>{
    lesson.create({
        for:     jwt.verify(req.cookies.token, 'nhatjt') || null
,
        label: req.body.label,
        data: req.body.data
    })
        .then(
            res.json({status:'success', message: 'created a lesson'})
        )
        .catch(err=>{
            res.status(400).json('lỗi hệ thống')
        })
}

const deleteLesson = (req,res,next)=>{
    lesson.findOneAndDelete({
        for:    jwt.verify(req.cookies.token, 'nhatjt') || null
,
        label: req.body.label,
    })
    .then(res.json({status:'success', message: 'deleted'}))
}

const updateLesson = (req,res,next) => {
    lesson.findOneAndUpdate({
        for: jwt.verify(req.cookies.token, 'nhatjt') || null
,
        label: req.body.data
    },{
        data: req.body.data
    })
    .then(res.json({status: 'success', message: 'updated'}))
}

const getData = (req,res,next)=>{
    lesson.find({
        for: jwt.verify(req.cookies.token, 'nhatjt'),
    })
    .then(data=>{
        res.json({status: 'success', data: data})
    })
}


module.exports = {createLesson,deleteLesson,updateLesson,getData}