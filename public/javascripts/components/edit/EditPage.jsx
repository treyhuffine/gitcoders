import $ from '../../vendor/jquery.min';
import React from 'react';
import CurrentUserStore from '../../stores/CurrentUserStore';

let unauthedEdit = {
  'position': 'absolute',
  'textAlign': 'center',
  'top': '40%',
  'left': '16%'
}

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}

export default class EditPage extends React.Component {
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
  render() {
    if (!$.isEmptyObject(this.state.currentUser)) {
      return (
        <h1>Logged in!</h1>
      )
    } else {
      return (
        <div style={unauthedEdit}>
          <h1>Login to edit your account...</h1>
        </div>
      )
    }
  }
}
