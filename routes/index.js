var routes = (passport, mongoose) => {
  var express = require('express');
  var router = express.Router();
  var request = require('request');

  router.get('/auth/github', passport.authenticate('github'));
  router.get('/auth/callback/github',
    passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/#/git/' + req.user.username);
  });
  router.get('/auth/logout', (req, res, next) => {
    req.logout();
    res.redirect("/");
  });
  router.get('/currentuser', (req, res, next) => {
    console.log("get user data", req.user);
    res.json(req.user);
  })
  router.get('/user/:username', (req, res, next) => {
    let User = require('../models/user');
    console.log(req.params.username);
    User.findOne({ 'username': new RegExp('^'+req.params.username+'$', "i") }).exec( (err, user) =>  {
      if (err) {
        res.status(400);
      }

      if (user) {
        res.json(user)
      }

      if (!user) {
        // hit github api, res json if available or redirect home if not
      }
    })
  });
  router.get('/user/:username/refreshgithub', (req, res, next) => {
    res.json({message: 'Ahoy endpoint'});
  });
  router.post('/user/:username/update', (req, res, next) => {
    console.log(req.body, req.params);
    let User = require('../models/user');
    User.findOneAndUpdate({ 'username': new RegExp('^'+req.params.username+'$', "i") }, req.body, {new: true}).exec( (err, user) =>  {
      console.log(user);
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
  router.get('/', (req, res, next) => {
    console.log(req.user);
    res.render('index', { currentUserData: req.user });
  });

  return router;
}
module.exports = routes;
