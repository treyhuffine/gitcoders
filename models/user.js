var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  githubID: String,
  githubData: Object,
  username: String,
  accessToken: String,
  devTitle: String,
  topTech1: String,
  topTech2: String,
  topTech3: String,
  desiredLocation1: String,
  desiredLocation2: String,
  desiredLocation3: String,
  tagline: String,
  bio: String,
  currentLocation: String,
  personalWebsite: String,
  email: String,
  blog: String,
  stackoverflow: String,
  twitter: String,
  linkedin: String,
  updatedAt: { type: Date, default: Date.now, required: true },
  repoList: { type: mongoose.Schema.ObjectId, ref: 'Repos'}
});
var User = mongoose.model('User', userSchema);

module.exports = User;
