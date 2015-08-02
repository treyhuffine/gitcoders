import $ from '../vendor/jquery.min';
import React from 'react';
import API from '../API';

import CurrentUserStore from '../stores/CurrentUserStore';
import LoginPage from './login/LoginPage';
import DashboardPage from './dashboard/DashboardPage';

API.getCurrentUser();

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}

export default class Landing extends React.Component{
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
    if ($.isEmptyObject(this.state.currentUser)) {
      return <LoginPage />
    } else {
      return <DashboardPage currentUser={this.state.currentUser} />
    }
  }
}
