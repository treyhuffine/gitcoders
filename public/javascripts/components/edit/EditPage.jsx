import $ from '../../vendor/jquery.min';
import React from 'react';
import CurrentUserStore from '../../stores/CurrentUserStore';
var Tabs = require('react-simpletabs');
import {Input} from 'react-bootstrap';

import EditDevSummary from './EditDevSummary';
import EditBio from './EditBio';
import EditLinks from './EditLinks';
import EditProject from './EditProject';

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
            <EditProject userData={this.state} />
          </Tabs.Panel>
          <Tabs.Panel title='Developer Summary'>
            <div className="container" style={topBuffer}>
              <div className="row card-panel white">
                <EditDevSummary userData={this.state} />
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Profile Bio'>
            <div className="container" style={topBuffer}>
              <div className="row card-panel white">
                <EditBio userData={this.state} />
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Contact / Links'>
            <div className="container" style={topBuffer}>
              <div className="row">
                <EditLinks userData={this.state} />
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
