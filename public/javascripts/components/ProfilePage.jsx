import React from 'react';
import API from '../API';

function parseLogin(params) {
  return params.login;
}
function requestData(props) {
  const { params } = props;
  const userLogin = parseLogin(params);

  // UserActionCreators.requestUser(userLogin, ['name', 'avatarUrl']);
  // RepoActionCreators.requestStarredReposPage(userLogin, true);
}

export default class Profile extends React.Component {
  componentWillMount() {
    requestData(this.props);
  }
  render() {
    const { user, params } = this.props;
    const login = parseLogin(params);
    return (
      <div className="login-container">
        <h1>Profile for {login}</h1>
      </div>
    );
  }
}
