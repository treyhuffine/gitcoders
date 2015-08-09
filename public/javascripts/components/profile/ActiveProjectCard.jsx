import React from 'react';
import TechTag from './TechTag';

let repoTitle = {
  'fontSize': '1.4rem',
  'borderBottom': '7px'
}
let linkStyle = {
  'fontSize': '.7rem',
  'color': 'rgb(47, 65, 91)'
}
let projectTag = {
  'fontSize': '.8rem'
}
let topBuffer = {
  'marginTop': '7px'
}

export default class ActiveProjectCard extends React.Component {
  render() {
    console.log(this.props.repoInfo);
    let techArray = this.props.repoInfo.technology.map( (el, idx) => {
      return <TechTag key={`tech-${idx}`} tech={el} />
    })
    return (
      <li className='collection-item project-card'>
        <div className='row'>
          <div className='col s9'>
            <div className='repo-title' style={repoTitle}>
              {this.props.repoInfo.projectData.name}
            </div>
          </div>
          <div className='col s3'>
            <span className='right'>
              {this.props.repoInfo.projectData.language}
            </span>
          </div>
          <div className='col s12'>
            <span><a href={this.props.repoInfo.liveSiteLink}  style={linkStyle}>Live Site Link</a></span>
            <span style={linkStyle}> | </span>
            <span><a href={this.props.repoInfo.projectData.svn_url}  style={linkStyle}>GitHub Repo LInk</a></span>
          </div>
          <div className='col s12'>
            <div className='project-tag' style={projectTag}>
              {this.props.repoInfo.projectTagline}
            </div>
          </div>
          <div className='col s12'>
              Images
          </div>
          <div className='col s12'>
            <div className='tech-array' style={topBuffer}>
              {techArray}
            </div>
          </div>
          <div className='col 12'>
            <div className='summary'>
              {this.props.repoInfo.summary}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
