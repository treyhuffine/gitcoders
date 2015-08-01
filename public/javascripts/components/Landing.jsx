import React from 'react';
import API from '../API';

export default class Landing extends React.Component{
  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <a href="http://localhost:3000/auth/github">Sign in with github</a>
      </div>
    );
  }
}
