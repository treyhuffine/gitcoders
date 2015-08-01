import $ from './vendor/jquery.min'
import React from 'react';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';
// import BrowserHistory from 'react-router/lib/BrowserHistory';

// const history = new BrowserHistory

import App from './App.jsx'
import Landing from './components/Landing';
import ProfilePage from './components/ProfilePage';
import AuthSession from './components/AuthSession';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route name="landing" path="/" component={App}>
          <Route name="profile" path="/git/:login" component={ProfilePage} />
          <Route name="authsession" path="/auth/:auth_token" component={AuthSession} />
        </Route>
      </Router>
    );
  }
}
