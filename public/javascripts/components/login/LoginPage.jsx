import React from 'react';
import LoginCard from './LoginCard';

$('html').css({'background-image': 'url(/images/landing-background.jpg)'})
$('body').css({'background-image': 'url(/images/landing-background.jpg)'})

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <LoginCard />
      </div>
    )
  }
}
