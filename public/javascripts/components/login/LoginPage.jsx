import React from 'react';
import LoginCard from './LoginCard';

let logoStyle = {
  'marginLeft': '10px'
}

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <LoginCard />
      </div>
    )
  }
}
