import React from 'react';

let devTitle = {
  'fontSize': '1.5em'
}
let liStyle = {
  'listStyle': 'circle',
  'marginLeft': '30px'
}
let ulStyle = {
  'marginTop': '5px',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'marginBottom': '10px',
  'paddingBottom': '10px'
}

export default class DeveloperSummary extends React.Component {
  render() {
    return (
      <div className="dev-summary">
        <div style={devTitle}>{this.props.userData.userProfile.user.devTitle || "No title chosen"}</div>
        <ul style={ulStyle}>
          <li style={liStyle}>{this.props.userData.userProfile.user.topTech1 || 'N/A'}</li>
          <li style={liStyle}>{this.props.userData.userProfile.user.topTech2 || 'N/A'}</li>
          <li style={liStyle}>{this.props.userData.userProfile.user.topTech3 || 'N/A'}</li>
        </ul>
        <div>Followers: {this.props.userData.userProfile.user.githubData.followers}</div>
        <div>Following: {this.props.userData.userProfile.user.githubData.following}</div>
        <div>Public Repos: {this.props.userData.userProfile.user.githubData.public_repos}</div>
      </div>
    )
  }
}
