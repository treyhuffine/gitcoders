import $ from './vendor/jquery.min'
import React, { PropTypes } from 'react';
import API from './API'
import UserStore from './stores/UserStore';
import NavGC from './components/NavGC';

API.getCurrentUser();

let getCurrentUserFromStore = () => {
  return { currentUser: UserStore.getCurrentUser() };
}

export default class App extends React.Component {
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
  static propTypes: {
    children: PropTypes.object
  }
  render() {
    return (
      <div className="app-wrapper">
        <NavGC currentUser={this.state.currentUser} />
        <h1>Git coders</h1>
        <a href="http://localhost:3000/auth/github">Login</a>
        {this.props.children}
      </div>
    );
  }
}
