const {Schema, model} = require('mongoose')

const Garant = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    date: {type: Date, default: Date.now()}
})

module.exports = model('Garant', Garant)

