import React from 'react';

let bioTitle = {
  'fontSize': '1.5em',
  'borderBottom': '1px solid #c8c8c8',
  'paddingBottom': '10px',
  'marginBottom': '10px'
}

export default class UserBio extends React.Component {
  render() {
    return (
      <div className="profile-bio">
        <div style={bioTitle}>Bio</div>
        <div>
          {this.props.userData.userProfile.user.bio || 'No user bio'}
        </div>
      </div>
    )
  }
}
