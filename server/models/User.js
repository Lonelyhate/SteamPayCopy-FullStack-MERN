const {Schema, model} = require('mongoose')

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, ref: 'Role'},
    avatar: {type: String},
    nickname: {type: String}
})

module.exports = model('User', User)