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
        <div style={devTitle}>{this.props.userData.userProfile.devTitle}</div>
        <ul style={ulStyle}>
          <li style={liStyle}>{this.props.userData.userProfile.topTech1}</li>
          <li style={liStyle}>{this.props.userData.userProfile.topTech2}</li>
          <li style={liStyle}>{this.props.userData.userProfile.topTech3}</li>
        </ul>
        <div>Followers: {this.props.userData.userProfile.githubData.followers}</div>
        <div>Following: {this.props.userData.userProfile.githubData.following}</div>
        <div>Public Repos: {this.props.userData.userProfile.githubData.public_repos}</div>
      </div>
    )
  }
}
