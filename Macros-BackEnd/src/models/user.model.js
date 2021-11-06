const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    FirstName: String,
    LastName: String,
    Nickname: String,
    Email: String,
    Password: String

});

module.exports = mongoose.model('users' , UserSchema);