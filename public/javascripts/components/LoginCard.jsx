import $ from '../vendor/jquery.min'
import React from 'react';

let cardTitle = {
  'color': 'black',
  'margin': '0',
  'fontSize': '2.5em'
}
let cardSubheader = {
  'color': 'black',
  'margin': '0',
  'fontSize': '2em'
}
let GCdesc = {
  'color': 'black',
  'margin': '0',
  'fontSize': '1.5em',
  'marginTop': '20px'
}
let signin = {
  'color': 'black',
  'margin': '0',
  'fontSize': '1.5em',
  'textAlign': 'center'
}
let GHbutton = {
  'textAlign': 'center',
  'marginTop': '10px'
}
let GHlogo = {
  'width': '25px',
  'verticalAlign': 'middle'
}
let GH = {
  'marginLeft': '10px',
  'verticalAlign': 'middle'
}
let signinWrapper = {
  'marginTop': '4vh'
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
                <h1 className="card-title" style={cardTitle}>Gitcoders</h1>
                <p style={cardSubheader}>Bring your code to life</p>
                <hr />
                <div className="row">
                  <div className="col s12 m8">
                    <p style={GCdesc}>
                      Gitcoders is a way for developers to display their projects and build a professional network around the the cool stuff that they have built
                    </p>
                  </div>
                  <div className="col s12 m4" style={signinWrapper}>
                    <div style={signin}>Sign in with</div>
                    <div className="buttonWrapper" style={GHbutton}>
                      <a className="waves-effect waves-light btn black" href="/auth/github">
                        <span><img src="../../images/GH-logo.png" style={GHlogo}/></span>
                        <span style={GH}>github</span>
                      </a>
                    </div>
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
