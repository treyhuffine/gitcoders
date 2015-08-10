import React from 'react';

let cardTitle = {
  'color': 'black',
  'margin': '0',
  'fontSize': '3.5em',
  'fontWeight': '400',
  'marginBottom': '15px'
}
let cardSubheader = {
  'color': 'black',
  'margin': '0',
  'fontSize': '2em'
}
let logoStyle = {
  'height': '50px',
  'marginBottom': '15px'
}

export default class GCTitle extends React.Component {
  render() {
    return (
      <div className="titleWrapper">
        <img src='/images/gitcoders-dark.png' style={logoStyle} />
        <p style={cardSubheader}>Bring your code to life</p>
        <hr />
      </div>
    )
  }
}
