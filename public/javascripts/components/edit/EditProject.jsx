import React from 'react';

let topBuffer = {
  'marginTop': '30px',
  'marginBottom': '30px'
}
let tabTitle = {
  'fontSize': '2rem',
  'color': 'rgb(180, 180, 180)',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'textAlign': 'center',
  'marginBottom': '15px',
  'paddingBottom': '15px'
}

export default class EditProject extends React.Component {
  render() {
    return (
      <div className="row card-panel white" style={topBuffer}>
        <div className="project-wrapper">
          <div className="tab-title col m12 s12" style={tabTitle}>
            Edit Projects
          </div>
          <div className="col m6 s12 pending-projects">
            <ul className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle" />
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
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
          </div>
          <div className="col m6 s12 pending-projects">
            <ul className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle" />
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
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
          </div>
        </div>
      </div>
    )
  }
}
