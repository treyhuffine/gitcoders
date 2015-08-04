import React from 'react';

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

export default class EditLinks extends React.Component {
  render() {
    return (
      <form className="col s12">
        <div className="container">
          <div className="row card-panel white">
            <div className="tab-title" style={tabTitle}>
              Contact and Links
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Email
              </div>
              <div className="col s12 m8">
                <input id="edit-email" type="email" placeholder="Email" className="validate" required/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Personal website URL
              </div>
              <div className="col s12 m8">
                <input id="edit-website" type="url" placeholder="Personal website"/>
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
                <input id="edit-blog" type="url" placeholder="Blog URL"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Stackoverflow URL
              </div>
              <div className="col s12 m8">
                <input id="edit-stackoverflow" type="url" placeholder="Stackoverflow"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                Twitter URL
              </div>
              <div className="col s12 m8">
                <input id="edit-blog" type="url" placeholder="Twitter"/>
              </div>
            </div>
            <div className="input-field">
              <div className="col s12 m4" style={linkTag}>
                LinkedIn Public URL
              </div>
              <div className="col s12 m8">
                <input id="edit-linkedin" type="url" placeholder="LinkedIn (linkedin.com/in/:username)"/>
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
