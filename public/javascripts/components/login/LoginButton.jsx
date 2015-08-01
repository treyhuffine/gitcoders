import React from 'react';

let signin = {
  'color': 'black',
  'margin': '0',
  'fontSize': '1.5em',
  'textAlign': 'center'
}
let GHlogo = {
  'width': '25px',
  'verticalAlign': 'middle'
}
let GH = {
  'marginLeft': '10px',
  'verticalAlign': 'middle'
}
let GHbutton = {
  'textAlign': 'center',
  'marginTop': '10px'
}

export default class LoginButton extends React.Component {
  render() {
    return (
      <div className="login-button-wrapper">
        <div style={signin}>Sign in with</div>
        <div className="buttonWrapper" style={GHbutton}>
          <a className="waves-effect waves-light btn black" href="/auth/github">
            <span><img src="../../images/GH-logo.png" style={GHlogo}/></span>
            <span style={GH}>github</span>
          </a>
        </div>
      </div>
    )
  }
}
