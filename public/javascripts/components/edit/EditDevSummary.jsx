import React from 'react';

let tabTitle = {
  'fontSize': '2rem',
  'color': 'rgb(180, 180, 180)',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'textAlign': 'center',
  'marginBottom': '15px',
  'paddingBottom': '15px'
}
let buttonStyle = {
  'verticalAlign': 'top',
  'marginRight': '10px'
}

export default class EditDevSummary extends React.Component {
  render() {
    return (
      <form className="col s12 edit-dev-summary">
        <div className="row">
          <div className="tab-title" style={tabTitle}>
            Developer Summary
          </div>
          <div className="col s12">
            <strong>Title</strong>
          </div>
          <div className="input-field col s12">
            <input id="user-title" type="text" className="validate" />
            <label htmlFor="user-title">Title (eg. Full stack developer, iOS Engineer, etc.)</label>
          </div>
          <div className="col s12">
            <strong>Current location</strong>
          </div>
          <div className="input-field col s12">
            <input id="user-title" type="text" className="validate" />
            <label htmlFor="user-title">Location</label>
          </div>
          <div className="col s12">
            <strong>Top technologies (programming languages, frameworks, UI design, Photoshop, etc.)</strong>
          </div>
          <div className="input-field col m4 s12">
            <input id="tech1-input" type="text" className="validate" />
            <label htmlFor="tech1-input">Technology 1</label>
          </div>
          <div className="input-field col m4 s12">
            <input id="tech2-input" type="text" className="validate" />
            <label htmlFor="tech2-input">Technology 2</label>
          </div>
          <div className="input-field col m4 s12">
            <input id="tech3-input" type="text" className="validate" />
            <label htmlFor="tech3-input">Technology 3</label>
          </div>
          <div className="col s12">
            <strong>Desired locations to work</strong>
          </div>
          <div className="input-field col m4 s12">
            <input id="location1-input" type="text" className="validate" />
            <label htmlFor="location1-input">Location 1</label>
          </div>
          <div className="input-field col m4 s12">
            <input id="location2-input" type="text" className="validate" />
            <label htmlFor="location2-input">Location 2</label>
          </div>
          <div className="input-field col m4 s12">
            <input id="location3-input" type="text" className="validate" />
            <label htmlFor="location3-input">Locatoin 3</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">
          <span style={buttonStyle}>Update Developer Profile</span>
          <i className="material-icons">send</i>
        </button>
      </form>
    )
  }
}
