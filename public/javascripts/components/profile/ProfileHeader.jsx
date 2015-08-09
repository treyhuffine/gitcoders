import React from 'react';

let name = {
  'fontSize': '1.8em'
}
let usernameTag = {
  'fontSize': '1.7em',
  'color': 'rgb(119, 119, 119)'
}
let userTitle = {
  'borderBottom': '1px solid #c8c8c8',
  'paddingBottom': '10px',
  'marginBottom': '10px'
}

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <div className="card-panel white">
        <div className="userTitle" style={userTitle}>
          <span style={name}>{this.props.userData.userProfile.user.githubData.name} </span>
          <span style={usernameTag}>({this.props.userData.userProfile.user.username})</span>
        </div>
        <div className="tagline">
          {this.props.userData.userProfile.user.tagline}
        </div>
      </div>
    )
  }
}
