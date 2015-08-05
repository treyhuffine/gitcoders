var mongoose = require('mongoose');
var repoSchema = new mongoose.Schema({
  updatedAt: { type: Date, default: Date.now, required: true },
  repoList: Array
})
var Repos = mongoose.model('Repos', repoSchema);

module.exports = Repos;
