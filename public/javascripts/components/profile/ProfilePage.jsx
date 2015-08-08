import React from 'react';
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ProfileStore from '../../stores/ProfileStore';
import UserCard from './UserCard';
import ProfileHeader from './ProfileHeader';
import DeveloperSummary from './DeveloperSummary';
import UserBio from './UserBio';
import ActiveProjectList from '../edit/ActiveProjectList';

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
    this.state = {
      userProfile: {
        user: {
          githubData: {}
        },
        repos: {
          repoList: []
        }
      },
      currentUser: {},
      repos: {}
    }
    this.onStoreChange = this.onStoreChange.bind(this);
    console.log("state$$$$$", this.state);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    this.setState(getUserProfileFromStore());
    let activeRepos = this.state.userProfile.repos.isActive || [];
    activeRepos.forEach( (el, idx) => {
      console.log(el, idx);
      this.state.userProfile.repos.repoList[el].isActive = true;
    });
    console.log(this.state);
    this.setState(this.state);
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
        <div className="row">
          <div className="col s12 m3">
            <UserCard userData={this.state} />
          </div>
          <div className="col s12 m6">
            <ProfileHeader userData={this.state}/>
            <ActiveProjectList allRepos={this.state.userProfile.repos.repoList || []} makeInactiveRepo={function(){}} />
          </div>
          <div className="col s12 m3">
            <div className="card-panel white">
              <DeveloperSummary userData={this.state} />
            </div>
            <div className="card-panel white">
              <UserBio userData={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
