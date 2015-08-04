var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  githubID: String,
  githubData: Object,
  username: String,
  token: String,
  devTitle: String,
  topTech1: String,
  topTech2: String,
  topTech3: String,
  desiredLocation1: String,
  desiredLocation2: String,
  desiredLocation3: String,
  tagline: String,
  bio: String,
  personalWebsite: String,
  email: String,
  blog: String,
  stackoverflow: String,
  twitter: String,
  linkedin: String
});
var User = mongoose.model('User', userSchema);


module.exports = User;
