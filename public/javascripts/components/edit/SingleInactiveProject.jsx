import React from 'react';

let title = {
  'fontSize': '1.35rem'
}
let description = {
  'fontSize': '.8rem',
  'color': 'rgb(113, 113, 113)'
}
let buttonFont = {
  'verticalAlign': 'top',
  'marginRight': '10px',
  'fontSize': '.7rem'
}
let iconSize = {
  'fontSize': '.8rem'
}
let buttonStyle = {
  'paddingLeft': '10px',
  'paddingRight': '10px'
}

export default class InactiveProject extends React.Component {
  constructor(props) {
    super(props);
    this.localHandleClick = this.localHandleClick.bind(this);
  }
  localHandleClick() {
    console.log(this.props.idx);
    this.props.makeActiveRepo(this.props.idx)
  }
  render() {
    return (
      <li className="collection-item">
        <span className="right">
          <button className="btn waves-effect waves-light" style={buttonStyle} onClick={this.localHandleClick}>
            <span style={buttonFont}>Make Active</span>
            <i className="material-icons" style={iconSize}>input</i>
          </button>
        </span>
        <span className="title" style={title}>{this.props.repoData.name}</span>
        <p style={description}>{this.props.repoData.description || "No description available"}</p>
        <p><strong>Forks:</strong> {this.props.repoData.forks}  |  <strong>Watchers:</strong> {this.props.repoData.watchers}  |  <strong>Stars:</strong> {this.props.repoData.stargazers_count}</p>
      </li>
    )
  }
}
