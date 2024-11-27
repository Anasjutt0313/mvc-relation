//initializing server
const express = require('express')
const app = express()
const port = 3000


//Require route

const bookRouter = require("./router/book")
const userRouter = require('./router/user')

// const userRouter = require('./router/user.router')


//require mongoose
const mongoose = require('mongoose')
//connect to db
mongoose.connect("mongodb://localhost:27017/library")
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error(err))

app.use(express.json())
app.use('/book',bookRouter)
app.use('/user',userRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})