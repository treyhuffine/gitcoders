var mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
  updatedAt: { type: Date, default: Date.now, required: true },
  projectData: Object,
  description: String,
  technology: Array,
  gitLink: String,
  liveSiteLink: String,
  projectOrder: Number,
  projectId: String,
  imageLinks: Array

})
var ActiveProjects = mongoose.model('ActiveProjects', projectSchema);

module.exports = ActiveProjects;
