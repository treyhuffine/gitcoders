import React from 'react';
import SingleActiveProject from './SingleActiveProject';

export default class ActiveProjects extends React.Component {
  render() {
    let projects = [];
    this.props.allRepos.forEach( (repo, idx) => {
      if (repo.isActive) {
        projects.push( <SingleActiveProject key={idx} repoData={repo} makeActiveRepo={this.props.makeActiveRepo} idx={idx} /> );
      }
    })
    return (
      <ul className="collection z-depth-1">
        {projects}
      </ul>
    )
  }
}
