import $ from './vendor/jquery.min';
import React, { PropTypes, Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import API from './API';
import App from './App';
import Landing from './components/Landing';
import ProfilePage from './components/profile/ProfilePage';
import AuthSession from './components/AuthSession';
import LoginPage from './components/login/LoginPage';
import EditPage from './components/edit/EditPage';
import RepoPage from './components/repo/RepoPage';

function validate(nextState, transition) {
  console.log("~~~~~~~~~~~~~~~~~~~~~", nextState, transition);
  console.log(nextState.params.username);
}

export default class Root extends React.Component {
  render() {
  console.log("$$$$$$$$$@@@@@@@@@@@@", this);
    return (
      <Router history={history}>
        <Route name="app" component={App}>
          <Route name="landing" path="/" component={Landing} />
          <Route name="profile" path="/git/:username" component={ProfilePage} />
          <Route name="edit" path="/edit" component={EditPage} />
          <Route name="repo" path="/edit/:repoid" component={RepoPage} />
        </Route>
      </Router>
    );
  }
}
