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
        // res.json(user)
        let Repos = require('../models/repos');
        Repos.findOne({ 'username': new RegExp('^'+user.username+'$', "i") }, (err, repos) => {
          let fullUser = {};
          fullUser.user = user;
          fullUser.repos = repos;
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
    console.log(req.params, req.body, req.body['repos[]']);
    let repoIndex = [];
    let allRepos = (typeof req.body['repos[]'] === 'string' ? [ req.body['repos[]'] ] : req.body['repos[]']);
    allRepos.forEach( (el, idx) => {
      console.log(el);
      repoIndex.push(Number(el));
    });
    console.log(repoIndex);
    if (req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
      let Repos = require('../models/repos');
      let ActiveProjects = require('../models/activeprojects');
      Repos.findOne({ 'username': new RegExp('^'+req.user.username+'$', "i") }, (err, repos) => {
        repos.isActive = repoIndex;
        repos.save();
        repoIndex.forEach( (el, idx) => {
          var newProject = new ActiveProjects();
          newProject.projectData = repos.repoList[el];
          // check if project exists already
          newProject.projectOrder = 1;
          newProject.projectId = repos.repoList[el].id;
          newProject.repoOwner = req.user.username;
          newProject.save();
        });
        res.json({message: "hit it"});
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

  return router;
}
module.exports = routes;
