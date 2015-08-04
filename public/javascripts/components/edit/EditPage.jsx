import $ from '../../vendor/jquery.min';
import React from 'react';
import CurrentUserStore from '../../stores/CurrentUserStore';
// import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
var Tabs = require('react-simpletabs');

let unauthedEdit = {
  'position': 'absolute',
  'textAlign': 'center',
  'top': '40%',
  'left': '16%'
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
            <div className="container">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="user-title" type="text" className="validate" />
                      <label htmlFor="user-title">Title (eg. Full stack developer, iOS Engineer, ...)</label>
                    </div>
                    <div className="col s12">
                      <strong>Top technologies (programming languages, frameworks, UI design, photoshop etc.)</strong>
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
                    <div className="input-field col s12">
                      <textarea id="user-description" type="text" className="materialize-textarea validate" length="1000" maxlength="1000"></textarea>
                      <label htmlFor="user-description">Breif description about yourself - be short and sweet!</label>
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
                    <span>Update Developer Profile</span>
                    <i className="material-icons">send</i>
                  </button>
                </form>
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Link Features'>
            <h2>Content #3 here</h2>
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
