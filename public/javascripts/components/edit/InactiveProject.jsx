import React from 'react';

export default class InactiveProject extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle red">play_arrow</i>
        <span className="title">Title</span>
        <p>First Line <br/>
           Second Line
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    )
  }
}
