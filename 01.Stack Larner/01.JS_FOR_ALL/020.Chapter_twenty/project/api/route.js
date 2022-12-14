const route = require('express').Router()
const history = require('./History')

route.get('/', (req, res) => {
    History.find()
        .then(history => {
            res.status(200).json(history)
        })
        .catch( e => {
            console.log(e)
            res.status(500).json({
                message: 'Error Occurred'
            })
        })
})

route.post('/', (req, res) => {
    let history = new History(req.body)
    history.save()()
        .then(() => History.find())
        .then(history => {
            res.status(201).json(history)
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                message: 'Enter Occurred'
            })
        })
})

module.exports = route