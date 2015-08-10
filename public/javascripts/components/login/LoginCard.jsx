import React from 'react';

import LoginButton from './LoginButton';
import GCDescription from '../GCDescription';
import GCTitle from './GCTitle';

let GCDesc = {
  'color': 'black',
  'margin': '0',
  'fontSize': '1.5em',
  'marginTop': '20px'
}
let signinWrapper = {
  'marginTop': '3.5vh'
}
let loginCard = {
  'marginTop': '20vh'
}

export default class LoginCard extends React.Component {
  render() {
    return (
      <div className="login-card container" style={loginCard}>
        <div className="row">
          <div className="col s12 m12">
            <div className="card z-depth-3">
              <div className="card-content white-text">
                <GCTitle />
                <div className="row">
                  <div className="col s12 m6" style={GCDesc}>
                    <GCDescription />
                  </div>
                  <div className="col s12 offset-m1 m4" style={signinWrapper}>
                    <LoginButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
