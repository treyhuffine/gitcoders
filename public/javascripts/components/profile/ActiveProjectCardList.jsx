import React from 'react';

import ActiveProjectCard from './ActiveProjectCard';

let projectTitle = {
  'fontSize': '1.5rem',
  'color': 'rgb(180, 180, 180)',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'marginBottom': '15px',
  'paddingBottom': '15px',
  'paddingRight': '0',
  'paddingLeft': '0'
}

export default class ActiveProjectCardList extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='card-panel white'>
          <div className='col s12' style={projectTitle}>
            <div className='project-header'>
              Projects
            </div>
          </div>
          <ul className='collection'>
            <ActiveProjectCard />
          </ul>
        </div>
      </div>
    )
  }
}
