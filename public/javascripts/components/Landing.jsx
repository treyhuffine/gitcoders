import $ from '../vendor/jquery.min';
import React from 'react';
import API from '../API';

import UserStore from '../stores/UserStore';
import LoginPage from './login/LoginPage';

API.getCurrentUser();

let getCurrentUserFromStore = () => {
  return { currentUser: UserStore.getCurrentUser() };
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
    UserStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    if ($.isEmptyObject(this.state.currentUser)) {
      return <LoginPage />
    } else {
      return <h1>LOGGED IN</h1>
    }
  }
}
