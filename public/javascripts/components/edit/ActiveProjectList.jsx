import React from 'react';
import SingleActiveProject from './SingleActiveProject';

export default class ActiveProjects extends React.Component {
  render() {
    let projects = [];
    console.log(this.props);
    this.props.allRepos.forEach( (repo, idx) => {
      if (repo.isActive) {
        projects.push( <SingleActiveProject key={idx} repoData={repo} makeInactiveRepo={this.props.makeInactiveRepo} idx={idx} /> );
      }
    })
    return (
      <ul className="collection z-depth-1">
        {projects}
      </ul>
    )
  }
}
