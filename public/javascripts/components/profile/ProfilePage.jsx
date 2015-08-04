import React from 'react';
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ProfileStore from '../../stores/ProfileStore';
import UserCard from './UserCard';
import ProfileHeader from './ProfileHeader';
import DeveloperSummary from './DeveloperSummary';
import UserBio from './UserBio';

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
        <div className="row">
          <div className="col s12 m3">
            <UserCard userData={this.state} />
          </div>
          <div className="col s12 m6">
            <ProfileHeader userData={this.state}/>
            <ul className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle" />
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
            </ul>
          </div>
          <div className="col s12 m3">
            <div className="card-panel white">
              <DeveloperSummary userData={this.state} />
            </div>
            <div className="card-panel white">
              <UserBio />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
