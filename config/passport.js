var GithubStrategy  = require('passport-github').Strategy;

// load up the user model
var User = require('../models/user');

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser( (user, done) => {
    done(null, user.dbID);
  });
  // used to deserialize the user
  passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new GithubStrategy({
      clientID        : configAuth.githubAuth.clientID,
      clientSecret    : configAuth.githubAuth.clientSecret,
      callbackURL     : configAuth.githubAuth.callbackURL
    },
    (token, tokenSecret, profile, done) => {
      // make the code asynchronous
      process.nextTick( () => {
        User.findOne({ githubID : profile._json.id }, (err, user) => {

          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err) {
            return done(err);
          }

          // if the user is found then log them in
          if (user) {
            user.token = require('crypto').randomBytes(64).toString('hex');
            user.save( (err) => {
              if (err) {
                throw err;
              }
              let userData = {
                dbID: user.id,
                username: user.githubData.login,
                token: user.token
              }
              return done(null, userData);
            });
            // user found, return that user
          } else {
            // if there is no user, create them
            var newUser = new User();
            newUser.githubID = profile._json.id;
            newUser.githubData = profile._json;
            newUser.token = require('crypto').randomBytes(64).toString('hex');

            // save our user into the database
            newUser.save( (err) => {
              if (err) {
                throw err;
              }
              let userData = {
                dbID: newUser.id,
                username: newUser.githubData.login,
                token: newUser.token
              }
              return done(null, userData);
            });
          }
        });
      });

  }));

};
