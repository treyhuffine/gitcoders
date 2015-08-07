import React from 'react';
import InactiveProject from './InactiveProject';

export default class AllProjectList extends React.Component {
  render() {
    let projects = this.props.allRepos.map( (repo, idx) => {
      return <InactiveProject key={idx} />
    })
    console.log("ALL REPOS=+++", this.props);
    return (
      <ul className="collection z-depth-1">
        {projects}
      </ul>
    )
  }
}
