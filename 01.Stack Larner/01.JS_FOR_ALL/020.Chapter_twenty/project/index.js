const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)
app.use('/api/history', require('./api/route'))


const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log('App is Running on PORT ' + PORT)
    mongoose.connect(`mongodb+srv://cluster0.lj4mbw4.mongodb.net/myFirstDatabase`, {useNewUrlParser: true}, () => {
        console.log('Database Connected')
    })
})