import React from 'react';

let userImage = {
  'width': '100%'
}
let currentLocation = {
  'color': '#747474'
}
let preferredLocation = {
  'fontSize': '1.3em'
}
let matIcon = {
  'fontSize': '1.2rem',
  'position': 'relative',
  'marginRight': '8px',
  'top': '4px'
}
let matLocation = {
  'position': 'relative',
  'top': '2px',
  'marginRight': '3px'
}
let locationIcon = {
  'fontSize': '1.1rem',
  'position': 'relative',
  'marginRight': '5px',
  'top': '1px'
}
let liStyle = {
  'listStyle': 'circle',
  'marginLeft': '30px'
}
let ulStyle = {
  'marginTop': '5px'
}
let anchorStyle = {
  'margin': '0px',
  'display': 'block',
  'width': '100%',
  'height': '100%',
  'textDecoration': 'none',
  'color': 'black'
}

export default class UserCard extends React.Component {
  render() {
    return (
      <div className="card-panel white">
        <div>
          <img src={this.props.userData.userProfile.githubData.avatar_url} alt="user" style={userImage} className="z-depth-1"/>
          <div style={currentLocation}><i className="tiny material-icons" style={matLocation}>location_on</i>{this.props.userData.userProfile.githubData.location}</div>
        </div>
        <div>
          <ul className="collection">
            <li className="collection-item user-link waves-effect"><a href={"mailto:"+this.props.userData.userProfile.email} style={anchorStyle}><i className="material-icons" style={matIcon}>email</i><span>Email</span></a></li>
            <li className="collection-item user-link waves-effect"><a href={this.props.userData.userProfile.personalWebsite} style={anchorStyle}><i className="material-icons" style={matIcon}>description</i><span>Résumé</span></a></li>
            <li className="collection-item user-link waves-effect"><a href={this.props.userData.userProfile.personalWebsite} style={anchorStyle}><i className="material-icons" style={matIcon}>perm_identity</i><span>Personal Website</span></a></li>
            <li className="collection-item user-link waves-effect"><a href={this.props.userData.userProfile.blog} style={anchorStyle}><i className="material-icons" style={matIcon}>message</i><span>Blog</span></a></li>
            <li className="collection-item user-link waves-effect"><i className="material-icons" style={matIcon}>assessment</i><span>Chat on Gitter</span></li>
          </ul>
        </div>
        <div>
          <div style={preferredLocation}><i className="material-icons" style={locationIcon}>my_location</i>Preferred Location</div>
          <ul style={ulStyle}>
            <li style={liStyle}>{this.props.userData.userProfile.desiredLocation1}</li>
            <li style={liStyle}>{this.props.userData.userProfile.desiredLocation2}</li>
            <li style={liStyle}>{this.props.userData.userProfile.desiredLocation3}</li>
          </ul>
        </div>
      </div>
    )
  }
}
