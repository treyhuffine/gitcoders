// import express from 'express';

var routes = (passport, mongoose) => {
  var express = require('express');
  var router = express.Router();

  router.get('/auth/github', passport.authenticate('github'));
  router.get('/auth/callback/github',
    passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    console.log(req.user);
    res.redirect('http://127.0.0.1:8080/#/auth/' + req.user.token);
  });
  router.get('/auth/logout', (req, res, next) => {
    req.logout();
    res.redirect("/");
  });
  router.post('/currentuser', (req, res, next) => {
    console.log("req body", req.body);
    console.log("get user data", req.user);
    res.json(req.user);
  })

  /* GET home page. */
  router.get('/', (req, res, next) => {
    console.log(req.user);
    res.render('index', { currentUserData: req.user });
    // console.log(req.user);
    // res.json(req.user)
  });

  return router;
}
module.exports = routes;
