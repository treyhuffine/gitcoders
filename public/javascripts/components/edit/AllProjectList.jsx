import React from 'react';
import SingleInactiveProject from './SingleInactiveProject';

export default class AllProjectList extends React.Component {
  render() {
    let projects = [];
    this.props.allRepos.forEach( (repo, idx) => {
      if (!repo.isActive  && repo.name.match(this.props.filteredWord)) {
        projects.push( <SingleInactiveProject key={idx} repoData={repo} makeActiveRepo={this.props.makeActiveRepo} idx={idx} /> );
      }
    })
    return (
      <ul className="collection z-depth-1">
        {projects}
      </ul>
    )
  }
}
