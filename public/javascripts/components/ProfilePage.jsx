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
  'fontSize': '1.7em',
  'color': 'rgb(119, 119, 119)'
}
let follower = {
  'fontSize': '1.5em'
}
let following = {
  'fontSize': '1.5em'
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
            <div className="card-panel white">
              <div>
                <img src={gitContent.githubData.avatar_url} alt="user" style={userImage} className="z-depth-1"/>
                {gitContent.githubData.location}
              </div>
              <div>
                <ul className="collection">
                  <li className="collection-item"><i className="material-icons">email</i>Contact</li>
                  <li className="collection-item"><i className="material-icons">description</i>Resume</li>
                  <li className="collection-item"><i className="material-icons">perm_identity</i>Personal Website</li>
                  <li className="collection-item"><i className="material-icons">message</i>Blog</li>
                  <li className="collection-item"><i className="material-icons">assessment</i>Chat on Gitter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card-panel white">
              <div>
                <span style={name}>{gitContent.githubData.name} </span>
                <span style={usernameTag}>({gitContent.username})</span>
                <hr />
                This is a user's tagline, it should be brief but give personality
              </div>
            </div>
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
              <div>
                <div style={follower}>Full Stack Developer</div>
                <ul>
                  <li>JavaScript</li>
                  <li>Mean Stack</li>
                  <li>React</li>
                </ul>
                <hr />
                <div>Followers: {gitContent.githubData.followers}</div>
                <div>Following: {gitContent.githubData.following}</div>
                <div>Repos: {gitContent.githubData.public_repos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
