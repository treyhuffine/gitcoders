var GithubStrategy  = require('passport-github').Strategy;
var User = require('../models/user');
var Repos = require('../models/repos');
var configAuth = require('./auth');
var request = require('request');

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
            user.accessToken = require('crypto').randomBytes(64).toString('hex');
            console.log(user);
            user.save( (err) => {
              if (err) {
                throw err;
              }
              let userData = {
                dbID: user.id,
                username: user.githubData.login,
                accessToken: user.accessToken
              }
              return done(null, userData);
            });
            // user found, return that user
          } else {
            // if there is no user, create them
            var newUser = new User();
            newUser.githubID = profile._json.id;
            newUser.githubData = profile._json;
            newUser.username = profile._json.login;
            newUser.accessToken = require('crypto').randomBytes(64).toString('hex');

            // save our user into the database
            var requestOptions = {
              url: `https://api.github.com/users/${newUser.username}/repos`,
              headers: {
                'User-Agent': newUser.username
              }
            }
            console.log("REPO URL------", `https://api.github.com/users/${newUser.username}/repos`);
            request(requestOptions, (error, response, body) => {
              if (body.length > 0) {
                var newRepos = new Repos();
                newRepos.repoList = JSON.parse(body); 
                console.log(newRepos.id);
                newRepos.save( (err) => {
                  if (err) {
                    throw err;
                  }
                  newUser.repoList = newRepos.id;
                  newUser.save( (err) => {
                    if (err) {
                      throw err;
                    }
                    let userData = {
                      dbID: newUser.id,
                      username: newUser.githubData.login,
                      accessToken: newUser.accessToken
                    }
                    console.log('NEW USER', userData.username);
                    return done(null, userData);
                  })
                });
              } else {
                newUser.save( (err) => {
                  if (err) {
                    throw err;
                  }
                  let userData = {
                    dbID: newUser.id,
                    username: newUser.githubData.login,
                    accessToken: newUser.accessToken
                  }
                  console.log('NEW USER', userData.username);
                  return done(null, userData);
                });
              }
            })
          }
        });
      });

  }));

};
