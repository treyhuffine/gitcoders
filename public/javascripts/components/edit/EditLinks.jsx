import React from 'react';
import UserActionsCreator from '../../actions/UserActionsCreator';

let linkTag = {
  'marginTop': '17px'
}
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
let httpReminder = {
  'fontSize': '.7rem',
  'color': 'rgb(135, 134, 134)',
  'textAlign': 'center',
  'marginBottom': '10px'
}

export default class EditLinks extends React.Component {
  updateUser(e) {
    e.preventDefault();
    let newAttributes = {}
    let currentUser = this.props.userData.currentUser.username;
    Object.keys(this.refs).forEach(key => newAttributes[key] = this.refs[key].getDOMNode().value);
    UserActionsCreator.updateUserInfo(newAttributes, currentUser);
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.updateUser.bind(this)}>
        <div className="container">
          <div className="row card-panel white">
            <div className="tab-title" style={tabTitle}>
              Contact and Links
            </div>
            <div className="http-reminder" style={httpReminder}>
              (Don't forget the http:// or https:// for URL's)
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Email
              </div>
              <div className="col s12 m8">
                <input id="edit-email" type="email" placeholder="Email" className="validate" ref="email" required/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Personal website URL
              </div>
              <div className="col s12 m8">
                <input id="edit-website" type="url" placeholder="Personal website" className="validate" ref="personalWebsite"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Résumé
              </div>
              <div className="col s12 m8">
                <div className="file-field">
                  <input className="file-path validate" type="text" placeholder="Click this to upload file..."/>
                  <span>
                    <input type="file" />
                  </span>
                </div>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Blog URL
              </div>
              <div className="col s12 m8">
                <input id="edit-blog" type="url" placeholder="Blog URL" className="validate" ref="blog"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Stackoverflow URL
              </div>
              <div className="col s12 m8">
                <input id="edit-stackoverflow" type="url" placeholder="Stackoverflow" className="validate" ref="stackoverflow"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Twitter URL
              </div>
              <div className="col s12 m8">
                <input id="edit-blog" type="url" placeholder="Twitter" className="validate" ref="twitter"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                LinkedIn Public URL
              </div>
              <div className="col s12 m8">
                <input id="edit-linkedin" type="url" placeholder="LinkedIn (linkedin.com/in/:username)" className="validate" ref="linkedin"/>
              </div>
            </div>
            <div className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                <span style={buttonStyle}>Update Links</span>
                <i className="material-icons">send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
