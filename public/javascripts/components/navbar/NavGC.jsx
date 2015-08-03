import $ from '../../vendor/jquery.min'
import React from 'react';
import { Link } from 'react-router';

let logoStyle = {
  'marginLeft': '10px'
}

export default class NavGC extends React.Component {
  componentWillMount() {
    console.log("obj ppppppp",$.isEmptyObject(this.props.currentUser));
    console.log("this.props.currentUser", this.props.currentUser);
    if (!$.isEmptyObject(this.props.currentUser)) {
      console.log(this.props.currentUser);
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    if (!$.isEmptyObject(this.props.currentUser)) {
      console.log(this.props.currentUser);
      let username = this.props.currentUser.githubData.login;
      return (
        <nav>
          <div className="nav-wrapper black z-depth-1">
            <a href="#" className="brand-logo" style={logoStyle}>gitcoders</a>
            <ul className="right hide-on-med-and-down">
              <li className="navButtons"><Link to={`/git/${username}`}>View Profile</Link></li>
              <li className="navButtons"><Link to={`/git/${username}`}>Edit Profile</Link></li>
              <li className="navButtons"><a href="/auth/logout">Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li className="navButtons"><a href="/auth/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <nav>
          <div className="nav-wrapper black z-depth-1">
            <a href="#" className="brand-logo" style={logoStyle}>gitcoders</a>
            <ul className="right hide-on-med-and-down">
              <li className="navButtons"><a href="/auth/github">Login</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li className="navButtons"><a href="/auth/github">Login</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}
