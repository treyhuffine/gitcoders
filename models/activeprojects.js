var mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
  updatedAt: { type: Date, default: Date.now, required: true },
  projectData: Object,
  summary: String,
  technology: Array,
  gitLink: String,
  liveSiteLink: String,
  projectOrder: Number,
  projectId: String,
  imageLinks: Array,
  repoOwner: String,
  languages: Array,
  projectTagline: String

})
var ActiveProjects = mongoose.model('ActiveProjects', projectSchema);

module.exports = ActiveProjects;
