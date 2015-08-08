import React from 'react';

import API from '../../API';

export default class RepoPage extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props;
    console.log("PARAMS", params.repoid);
    API.getActiveRepo(params.repoid);
  }
  render() {
    return (
      <h1>Hello world</h1>
    )
  }
}
