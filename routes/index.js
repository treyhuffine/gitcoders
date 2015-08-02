var routes = (passport, mongoose) => {
  var express = require('express');
  var router = express.Router();

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
  router.get('/userprofile/:username', (req, res, next) => {
    let User = require('../models/user');
    console.log(req.params.username);
    User.findOne({ 'username': new RegExp('^'+req.params.username+'$', "i") }).exec( (err, user) =>  {
      console.log(user);
    })
    res.json({message: "complete"});
  });
  router.get('/', (req, res, next) => {
    console.log(req.user);
    res.render('index', { currentUserData: req.user });
  });

  return router;
}
module.exports = routes;
