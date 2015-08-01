import React from 'react';

let logoStyle = {
  'marginLeft': '10px'
}

export default class NavGC extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper black z-depth-1">
          <a href="#" className="brand-logo" style={logoStyle}>GitCoders</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li className="navButtons"><a href="/auth/github">Login</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
