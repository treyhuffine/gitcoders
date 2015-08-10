import React from 'react';
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ProfileStore from '../../stores/ProfileStore';
import UserCard from './UserCard';
import ProfileHeader from './ProfileHeader';
import DeveloperSummary from './DeveloperSummary';
import UserBio from './UserBio';
import ActiveProjectCardList from './ActiveProjectCardList';

function parseUsername(params) {
  return params.username;
}
function requestData(props) {
  const { params } = props;
  const userUsername = parseUsername(params);
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
    let { params } = this.props;
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
      currentUser: {}
    }
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    this.setState(getUserProfileFromStore());
  }
  componentDidMount() {
    $(".fancybox").fancybox();
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
    let gitContent = this.state.userProfile;
    console.log(this.state);
    return (
      <div className="profile-container">
        <div className="row">
          <div className="col s12 m3">
            <UserCard userData={this.state} />
          </div>
          <div className="col s12 m6">
            <ProfileHeader userData={this.state}/>
            <ActiveProjectCardList activeProjects={this.state.userProfile.activeProjects || []} />
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
