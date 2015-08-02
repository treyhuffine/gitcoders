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

let userImage = {
  'width': '100%'
}
let name = {
  'fontSize': '1.8em'
}
let usernameTag = {
  'marginLeft': '10px',
  'fontSize': '1.7em',
  'color': 'rgb(119, 119, 119)'
}
let follower = {
  'fontSize': '1.5em'
}
let following = {
  'fontSize': '1.5em',
  'marginLeft': '15px'
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props
    console.log("PARAMS", params.username);
    API.getUserProfile(params.username);
    this.state = {
      userProfile: {
        githubData: {}
      },
      currentUser: {}
    }
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
    ProfileStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
    ProfileStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    const { params } = this.props;
    const username = parseUsername(params);
    console.log(username);
    console.log(this.state);
    let gitContent = this.state.userProfile;
    return (
      <div className="profile-container">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              <div className="card-panel white">
                <div className="row">
                  <span className="col s4">
                    <img src={gitContent.githubData.avatar_url} alt="user" style={userImage} className="z-depth-1"/>
                  </span>
                  <span className="black-text col s8" style={{'verticalAlign': 'top'}}>
                    <span style={name}>{gitContent.githubData.name}</span>
                    <span style={usernameTag}>({gitContent.username})</span>
                    <hr />
                    <span style={follower}>Followers: {gitContent.githubData.followers}</span>
                    <span style={following}>Following: {gitContent.githubData.following}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
