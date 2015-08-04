import React from 'react';
import { Link } from 'react-router';

let logoStyle = {
  'marginLeft': '10px',
  'color': '#FCFCFD'
}
let navButtons ={
  'color': '#d5d5d7'
}

export default class AuthedNav extends React.Component {
  render() {
    console.log(this.props);
    let username = this.props.currentUser.githubData.login;
    return (
      <nav>
        <div className="nav-wrapper grey darken-4 z-depth-1">
          <a href="#" className="brand-logo" style={logoStyle}>gitcoders</a>
          <ul className="right hide-on-med-and-down">
            <li className="navButtons"><Link to={`/git/${username}`} style={navButtons}>View Profile</Link></li>
            <li className="navButtons"><Link to={'edit'} style={navButtons}>Edit Profile</Link></li>
            <li className="navButtons"><a href="/auth/logout" style={navButtons}>Logout</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li className="navButtons"><a href="/auth/logout">Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
