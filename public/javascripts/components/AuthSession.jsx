import React, { PropTypes } from 'react';
import API from '../API';
import Root from '../Root';
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
// console.log(Router);

export default class AuthSession extends React.Component {
  // let userToken = this.props.params.auth_token;
  // static willTransitionTo(transition) {
  //   console.log("LOLOL");
  //   console.log(this.props.params.auth_token);
  //   // transition.
  //   // requestData(this.props);
  // }
  // componentWillMount() {
  //   console.log(this.props.params.auth_token);
  //   Router.Navigation.transitionTo('http://localhost:8080');
  // }

  mixins: [Navigation]
  // static contextTypes: {
  //   router: PropTypes.object.isRequired
  // }
  componentWillMount() {
    console.log(Navigation);
    console.log(this);
    // console.log(Root.Navigation.transitionTo('/'));
    // console.log("ROOT", Root.transitionTo);
    // var router = this.context.router;
    // console.log("GET SOME DATA", router);
    Navigation.transitionTo('/')
  }
  render() {
    // const { user, params } = this.props;
    // const login = parseLogin(params);
    console.log(this.props);
    return (
      <div className="login-container">
        <h1>Auth page</h1>
      </div>
    );
  }
}
