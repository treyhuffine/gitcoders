import $ from '../../vendor/jquery.min';
import React from 'react';
import { Link } from 'react-router';

import UnauthedNav from './UnauthedNav';
import AuthedNav from './AuthedNav';


export default class NavGC extends React.Component {
  // componentWillMount() {
  //   console.log("obj ppppppp",$.isEmptyObject(this.props.currentUser));
  //   console.log("this.props.currentUser", this.props.currentUser);
  //   if (!$.isEmptyObject(this.props.currentUser)) {
  //     console.log(this.props.currentUser);
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }
  render() {
    if (!$.isEmptyObject(this.props.currentUser)) {
      return (
        <AuthedNav currentUser={this.props.currentUser} />
      )
    } else {
      return (
        <UnauthedNav />
      )
    }
  }
}
