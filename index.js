const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')



// variable and import file
const port = process.env.PORT||5000
const loginRouter = require('./src/router/login')
const controldata = require('./src/router/controldata')



// middle ware
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
        // this item is set specifically for cross-domain purposes 
}

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors(corsOptions))



// connect and start server
mongoose.connect('mongodb+srv://nhatjt:1234@cluster0.f7a07.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected to database by mongoose')
        app.listen(port, ()=>{
            console.log('server was started on http://localhost:5000')
        })
    })
    .catch(err=>console.log(err))

// router confige
app.use('/', loginRouter)
app.use('/', controldata)


app.get('/nhat', (req,res,next)=>{res.json('oke')})


