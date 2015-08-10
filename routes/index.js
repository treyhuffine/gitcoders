var routes = (passport, mongoose) => {
  var express = require('express');
  var router = express.Router();
  var request = require('request');

  router.get('/auth/github', passport.authenticate('github'));
  router.get('/auth/callback/github',
    passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
      res.redirect('/#/git/' + req.user.username);
    }
  );
  router.get('/auth/logout', (req, res, next) => {
    req.logout();
    res.redirect("/");
  });
  router.get('/currentuser', (req, res, next) => {
    if (!req.user) {
      res.json({message: "Please login"});
      return;
    }
    let Repos = require('../models/repos');
    Repos.findOne({ 'username': new RegExp('^'+req.user.username+'$', "i") }, (err, repos) => {
      let fullUser = {};
      fullUser.user = req.user;
      fullUser.repos = repos;
      res.json(fullUser);
    })
  });
  router.get('/user/:username', (req, res, next) => {
    let User = require('../models/user');
    User.findOne({ 'username': new RegExp('^'+req.params.username+'$', "i") }).exec( (err, user) =>  {
      if (err) {
        res.status(400);
      }

      if (user) {
        let ActiveProjects = require('../models/activeprojects');
        ActiveProjects.find({ 'repoOwner': new RegExp('^'+user.username+'$', "i") }, (err, repos) => {
          let fullUser = {};
          fullUser.user = user;
          fullUser.activeProjects = repos;
          console.log(fullUser.user);
          res.json(fullUser);
        })
      }

      if (!user) {
        // hit github api, res json if available or redirect home if not
      }
    })
  });
  router.get('/user/:username/refreshgithub', (req, res, next) => {
    res.json({message: 'Ahoy endpoint'});
  });
  router.put('/user/:username/repos', (req, res, next) => {
    let repoIndex = [];
    let allRepos = (typeof req.body['repos[]'] === 'string' ? [ req.body['repos[]'] ] : req.body['repos[]']);
    if (allRepos) {
      allRepos.forEach( (el, idx) => {
        repoIndex.push(Number(el));
      });
    }
    if (req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
      let Repos = require('../models/repos');
      let ActiveProjects = require('../models/activeprojects');
      Repos.findOne({ 'username': new RegExp('^'+req.user.username+'$', "i") }, (err, repos) => {
        repos.isActive = repoIndex;
        repos.save();
        ActiveProjects.find({ 'repoOwner': new RegExp('^'+req.user.username+'$', "i") }, (err, allActiveProjects) => {
          let activeIds = []
          repoIndex.forEach( (el, idx) => {
            activeIds.push(repos.repoList[el].id);
          })
          allActiveProjects.forEach( (el, idx) => {
            if (activeIds.indexOf(Number(el.projectId)) > -1) {
              activeIds.splice(activeIds.indexOf(Number(el.projectId)), 1);
              repoIndex.splice(activeIds.indexOf(Number(el.projectId)), 1); // delete entry here
            } else {
              el.remove();
            }
          })
          repoIndex.forEach( (el, idx) => {
            var newProject = new ActiveProjects();
            newProject.projectData = repos.repoList[el];
            newProject.projectOrder = 1;
            newProject.projectId = repos.repoList[el].id;
            newProject.repoOwner = req.user.username;
            newProject.save();
          });
          res.json({message: "hit it"});
        })
      })
    }
    else {
      req.json({message: "Sign in to save these repos"});
    }
  })
  router.post('/user/:username/update', (req, res, next) => {
    let User = require('../models/user');
    User.findOneAndUpdate({ 'username': new RegExp('^'+req.params.username+'$', "i") }, req.body, {new: true}).exec( (err, user) =>  {
      if (err) {
        res.status(400);
        return;
      }
      if (!user) {
        res.status404;
        return;
      }
      res.json(user)
    })
  });
  router.get('/repo/:repoid', (req, res, next) => {
    let ActiveProjects = require('../models/activeprojects');
    ActiveProjects.findOne( {projectId: req.params.repoid}, (err, repo) => {
      if (!repo) {
        res.redirect('/#/');
        return;
      }
      if (!req.user || repo.repoOwner.toLowerCase() !== req.user.username.toLowerCase()) {
        res.redirect('/#/');
        return;
      }
      res.json(repo);
    })
  });
  router.get('/', (req, res, next) => {
    res.render('index', { currentUserData: req.user });
  });
  router.post('/repo/:repoid', (req, res, next) => {
    let ActiveProjects = require('../models/activeprojects');
    ActiveProjects.findOne( {projectId: req.params.repoid}, (err, repo) => {
      if (!repo) {
        res.redirect('/#/');
        return;
      }
      if (!req.user || repo.repoOwner.toLowerCase() !== req.user.username.toLowerCase()) {
        res.redirect('/#/');
        return;
      }

      repo.technology = req.body['technology[]'];
      repo.languages = req.body['languages[]'];
      repo.imageLinks = req.body['imageLinks[]'];
      repo.summary = req.body.summary;
      repo.projectTagline = req.body.projectTagline;
      repo.liveSiteLink = req.body.liveSiteLink;

      repo.save();
      res.json(repo);
    })
  })

  return router;
}
module.exports = routes;
