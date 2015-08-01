import $ from './vendor/jquery.min'
import React, { PropTypes, Component } from 'react';
import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './App.jsx'
import Landing from './components/Landing';
import ProfilePage from './components/ProfilePage';
import AuthSession from './components/AuthSession';
import LoginPage from './components/LoginPage';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route name="landing" path="/" component={App}>
          <Route name="login" path="login" component={LoginPage} />
          <Route name="profile" path="/git/:login" component={ProfilePage} />
          <Route name="authsession" path="/auth/:auth_token" component={AuthSession} />
        </Route>
      </Router>
    );
  }
}
