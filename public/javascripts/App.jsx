import $ from './vendor/jquery.min';
import React, { PropTypes } from 'react';
import API from './API';
import CurrentUserStore from './stores/CurrentUserStore';
import NavGC from './components/NavGC';

API.getCurrentUser();

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
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
    CurrentUserStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
  }
  static propTypes: {
    children: PropTypes.object
  }
  render() {
    console.log(this);
    return (
      <div className="app-wrapper">
        <NavGC currentUser={this.state.currentUser} />
        {this.props.children}
      </div>
    );
  }
}
