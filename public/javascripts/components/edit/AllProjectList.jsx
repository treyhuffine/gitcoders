import React from 'react';

export default class AllProjectList extends React.Component {
  render() {
    return (
      <ul className="collection z-depth-1">
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>First Line <br/>
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Title</span>
          <p>First Line <br/>
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Title</span>
          <p>First Line <br/>
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>
    )
  }
}
