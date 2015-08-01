import React from 'react';

let cardTitle = {
  'color': 'black',
  'margin': '0',
  'fontSize': '2.5em'
}
let cardSubheader = {
  'color': 'black',
  'margin': '0',
  'fontSize': '2em'
}

export default class GCTitle extends React.Component {
  render() {
    return (
      <div className="titleWrapper">
        <h1 className="card-title" style={cardTitle}>Gitcoders</h1>
        <p style={cardSubheader}>Bring your code to life</p>
        <hr />
      </div>
    )
  }
}
