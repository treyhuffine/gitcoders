import $ from '../../vendor/jquery.min';
import React from 'react';
import CurrentUserStore from '../../stores/CurrentUserStore';
// import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
var Tabs = require('react-simpletabs');
import {Input} from 'react-bootstrap';

let unauthedEdit = {
  'position': 'absolute',
  'textAlign': 'center',
  'top': '40%',
  'left': '16%'
}
let topBuffer = {
  'marginTop': '30px',
  'marginBottom': '30px'
}
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

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}

export default class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = getCurrentUserFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
    console.log("state$$$$$", this.state);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    console.log("change", this.state);
  }
  componentDidMount() {
    CurrentUserStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    if (!$.isEmptyObject(this.state.currentUser)) {
      return (
        <Tabs>
          <Tabs.Panel title='Projects'>
            <div className="container">
              <div className="row">
                PROJECTS
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Developer Summary'>
            <div className="container" style={topBuffer}>
              <div className="row card-panel white">
                <form className="col s12">
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
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Profile Bio'>
            <div className="container" style={topBuffer}>
              <div className="row card-panel white">
                <div className="row">
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
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Contact / Links'>
            <div className="container" style={topBuffer}>
              <div className="row">
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
                          LinkedIn Public URL
                        </div>
                        <div className="col s12 m8">
                          <input id="edit-linkedin" type="url" placeholder="LinkedIn (linkedin.com/in/:username)"/>
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
                      <div className="col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                          <span style={buttonStyle}>Update Links</span>
                          <i className="material-icons">send</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      )
    } else {
      return (
        <div style={unauthedEdit}>
          <h1>Login to edit your account...</h1>
        </div>
      )
    }
  }
}
