import React from 'react';

let userImage = {
  'width': '100%'
}
let currentLocation = {
  'color': '#747474'
}
let preferredLocation = {
  'fontSize': '1.5em'
}
let matIcon = {
  'fontSize': '1.2rem',
  'position': 'relative',
  'marginRight': '8px',
  'top': '4px'
}

export default class UserCard extends React.Component {
  render() {
    return (
      <div className="card-panel white">
        <div>
          <img src={this.props.userData.userProfile.githubData.avatar_url} alt="user" style={userImage} className="z-depth-1"/>
          <div style={currentLocation}>{this.props.userData.userProfile.githubData.location}</div>
        </div>
        <div>
          <ul className="collection">
            <li className="collection-item user-link"><i className="material-icons" style={matIcon}>email</i><span>Contact</span></li>
            <li className="collection-item user-link"><i className="material-icons" style={matIcon}>description</i><span>Résumé</span></li>
            <li className="collection-item user-link"><i className="material-icons" style={matIcon}>perm_identity</i><span>Personal Website</span></li>
            <li className="collection-item user-link"><i className="material-icons" style={matIcon}>message</i><span>Blog</span></li>
            <li className="collection-item user-link"><i className="material-icons" style={matIcon}>assessment</i><span>Contact</span></li>
          </ul>
        </div>
        <div>
          <div style={preferredLocation}>Preferred Location</div>
          <ul>
            <li>Bay Area</li>
            <li>Seattle</li>
            <li>Austin</li>
          </ul>
        </div>
      </div>
    )
  }
}
