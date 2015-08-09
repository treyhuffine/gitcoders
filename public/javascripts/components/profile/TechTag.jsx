import React from 'react';

let techDescription = {
  'borderRadius': '3px',
  'backgroundColor': '#E0EDF5',
  'color': '#2F5D92',
  'float': 'left',
  'paddingLeft': '6px',
  'paddingRight': '6px',
  'marginRight': '8px',
  'marginBottom': '6px',
  'height': '20px',
  'lineHeight': '20px',
  'fontSize': '.7rem',
  'fontWeight': 'normal'
}

export default class TechTag extends React.Component {
  render() {
    return (
      <span style={techDescription}>
        {this.props.tech}
      </span>
    )
  }
}
