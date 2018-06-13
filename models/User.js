// create an user model class
const mongoose = require('mongoose');
const { Schema } = mongoose; // ES6 destructure for 'const Schema = mongoose.Schema'

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // create a collection of users

