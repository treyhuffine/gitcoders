import React from 'react';
import API from '../API';
import UserStore from '../stores/UserStore';

function parseLogin(params) {
  return params.login;
}
function requestData(props) {
  const { params } = props;
  const userLogin = parseLogin(params);

  // UserActionCreators.requestUser(userLogin, ['name', 'avatarUrl']);
  // RepoActionCreators.requestStarredReposPage(userLogin, true);
}
let getCurrentUserFromStore = () => {
  return { currentUser: UserStore.getCurrentUser() };
}

export default class Profile extends React.Component {
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
  componentWillMount() {
    requestData(this.props);
    UserStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    const { params } = this.props;
    const login = parseLogin(params);
    console.log(login, user);
    console.log(this.state);
    return (
      <div className="login-container">
        <h1>Profile for {login}</h1>
      </div>
    );
  }
}
