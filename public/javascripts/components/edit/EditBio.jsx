import React from 'react';
import UserActionsCreator from '../../actions/UserActionsCreator';

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

export default class EditBio extends React.Component {
  render() {
    return (
      <div className="row edit-bio">
        <div className="tab-title" style={tabTitle}>
          Profile Tagline and Biography
        </div>
        <form className="col s12">
          <div className="col s12">
            <strong>Give yourself some personality with a unique tagline</strong>
          </div>
          <div className="input-field col s12">
            <input id="edit-tagline" type="text" className="validate" />
            <label htmlFor="edit-tagline">Tagline</label>
          </div>
          <div className="col s12">
            <strong>Brief description of yourself</strong>
          </div>
          <div className="input-field col s12">
            <textarea id="user-description" type="text" className="materialize-textarea validate" length="1000" maxlength="1000"></textarea>
            <label htmlFor="user-description">Bio / summary</label>
          </div>
          <div className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              <span style={buttonStyle}>Update Bio</span>
              <i className="material-icons">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
