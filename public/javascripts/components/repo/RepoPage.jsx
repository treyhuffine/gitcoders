import React from 'react';
var Tabs = require('react-simpletabs');
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ActiveRepoStore from '../../stores/ActiveRepoStore';

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}
let getActiveRepoFromStore = () => {
  return { activeRepo: ActiveRepoStore.getActiveRepo() }
}
let topBuffer = {
  'marginTop': '30px',
  'marginBottom': '30px'
}

export default class RepoPage extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props;
    API.getActiveRepo(params.repoid);
    this.state = getActiveRepoFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    this.setState(getActiveRepoFromStore());
  }
  componentWillMount() {
    CurrentUserStore.addChangeListener(this.onStoreChange);
    ActiveRepoStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
    ActiveRepoStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    console.log(this.state);
    return (
      <div className="active-repo-wrapper">
        <Tabs>
          <Tabs.Panel title='Edit Project'>
            <h1>Hello word</h1>
          </Tabs.Panel>
          <Tabs.Panel title='Preview'>
            <h1>Preview</h1>
          </Tabs.Panel>
        </Tabs>
      </div>
    )
  }
}
