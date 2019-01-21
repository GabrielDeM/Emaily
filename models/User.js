const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// Created a type of Schema
const userSchema = new Schema({
	googleId: String,
	githubId: String
});

// Created a Model Class (Collection) named 'users' following the userSchema
mongoose.model('users', userSchema);
