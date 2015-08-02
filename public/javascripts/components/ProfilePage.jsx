import React from 'react';
import API from '../API';

import CurrentUserStore from '../stores/CurrentUserStore';
import ProfileStore from '../stores/ProfileStore';

function parseUsername(params) {
  return params.username;
}
function requestData(props) {
  const { params } = props;
  const userUsername = parseUsername(params);

  // UserActionCreators.requestUser(userLogin, ['name', 'avatarUrl']);
  // RepoActionCreators.requestStarredReposPage(userLogin, true);
}
let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}
let getUserProfileFromStore = () => {
  return { userProfile: ProfileStore.getUserProfile() };
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props
    console.log("PARAMS", params.username);
    API.getUserProfile(params.username);
    console.log("API-----", API.getUserProfile);
    // this.setState(getCurrentUserFromStore());
    // this.setState(getUserProfileFromStore());
    this.onStoreChange = this.onStoreChange.bind(this);
    console.log("state$$$$$", this.state);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    this.setState(getUserProfileFromStore());
    console.log("change", this.state);
  }
  componentWillMount() {
    requestData(this.props);
    CurrentUserStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    const { params } = this.props;
    const username = parseUsername(params);
    console.log(username);
    console.log(this.state);
    return (
      <div className="username-container">
        <h1>Profile for {username}</h1>
      </div>
    );
  }
}
