import $ from './vendor/jquery.min'
import React, { PropTypes } from 'react';
import API from './API'

// import Landing from './components/Landing';
// let getCurrentUserFromStore = () => {
//   return { currentUser: UserStore.getCurrentUser() };
// }
// $.get('http://localhost:3000/currentuser')
// .success( user => {
//   console.log(user);
// })
// .error( error => {
//   console.log(error);
// })
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = getCurrentUserFromStore();
  //   this.onStoreChange = this.onStoreChange.bind(this);
  // }
  // onStoreChange() {
  //   console.log("change");
  //   this.setState(getCurrentUserFromStore());
  // }
  static propTypes: {
    children: PropTypes.object
  }
  render() {
    return (
      <div className="app-wrapper">
        <h1>Git coders</h1>
        <a href="http://localhost:3000/auth/github">Login</a>
        {this.props.children}
      </div>
    );
  }
}
