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
  render() {
    return (
      <li className="collection-item">
        <div className="row">
          <div className="col l8 m12 s12">
            <span className="title" style={title}>{this.props.repoData.name}</span>
            <p style={description}>{this.props.repoData.description || "No description available"}</p>
            <p><strong>Forks:</strong> {this.props.repoData.forks}  |  <strong>Watchers:</strong> {this.props.repoData.watchers}  |  <strong>Stars:</strong> {this.props.repoData.stargazers_count}</p>
          </div>
          <div className="col l4 m6 s6">
            <span className="right">
              <button className="btn waves-effect waves-light blue" style={buttonStyle}>
                <span style={buttonFont}>Edit Project</span>
                <i className="material-icons" style={iconSize}>create</i>
              </button>
            </span>
          </div>
          <div className="col l4 m6 s6">
            <span className="right">
              <button className="btn waves-effect waves-light red" style={buttonStyle}>
                <span style={buttonFont}>Make Inactive</span>
                <i className="material-icons" style={iconSize}>clear</i>
              </button>
            </span>
          </div>
        </div>
      </li>
    )
  }
}
