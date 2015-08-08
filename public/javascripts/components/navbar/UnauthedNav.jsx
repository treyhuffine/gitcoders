import React from 'react';
import { Link } from 'react-router';

let logoStyle = {
  'marginLeft': '10px',
  'color': '#FCFCFD'
}
let navButtons ={
  'color': '#d5d5d7'
}

export default class UnauthedNav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4 z-depth-1">
          <a href="#" className="brand-logo" style={logoStyle}><img src="/images/gitcoders-logo.png" className="gc-logo" /></a>
          <ul className="right hide-on-med-and-down">
            <li className="navButtons"><a href="/auth/github" style={navButtons}>Login</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li className="navButtons"><a href="/auth/github">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
