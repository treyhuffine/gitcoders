import $ from '../vendor/jquery.min'
import React from 'react';

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
    return (
      <nav>
        <div className="nav-wrapper black z-depth-1">
          <a href="#" className="brand-logo" style={logoStyle}>GitCoders</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
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
