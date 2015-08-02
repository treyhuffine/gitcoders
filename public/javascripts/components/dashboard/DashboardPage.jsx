import $ from '../../vendor/jquery.min';
import React from 'react';

export default class DashboardPage extends React.Component {
  render() {
  console.log(this.props.currentUser);
    return (
      <h1>Dashboard</h1>
    )
  }
}
