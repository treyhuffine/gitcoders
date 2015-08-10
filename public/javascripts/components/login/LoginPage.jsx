import React from 'react';
import LoginCard from './LoginCard';


export default class LoginPage extends React.Component {
  componentDidMount() {    
    $('html').css({'background-image': 'url(/images/landing-background.jpg)'})
    $('body').css({'background-image': 'url(/images/landing-background.jpg)'})
  }
  render() {
    return (
      <div className="login-wrapper">
        <LoginCard />
      </div>
    )
  }
}
