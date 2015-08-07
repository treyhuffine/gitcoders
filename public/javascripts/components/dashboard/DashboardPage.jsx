import $ from '../../vendor/jquery.min';
import React from 'react';
import EditProject from '../edit/EditProject';

export default class DashboardPage extends React.Component {
  render() {
  console.log(this.props.currentUser);
    return (
      <EditProject userData={this.props}/>
    )
  }
}
