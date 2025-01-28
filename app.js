const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const suggestionRouter = require('./routes/suggestions/suggestionRouter')
const getAllSuggestions = require('./routes/suggestions/model/controller/suggestionController')



require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.listen(3000,()=>{
    console.log('Server Started on port 3000')
})
mongoose
.connect("mongodb://localhost:27017/suggestion-box")
.then(()=>{
    console.log('MongoDB connected')
})
.catch((e)=>{
    console.log(e)
})

app.use('/api/suggestions', suggestionRouter)

module.exports = app