import React from 'react';

export default class ActiveProjectCard extends React.Component {
  render() {
    console.log(this.props.repoInfo);
    return (
      <li className='collection-item project-card'>
        {this.props.repoInfo.projectData.name}
      </li>
    )
  }
}
