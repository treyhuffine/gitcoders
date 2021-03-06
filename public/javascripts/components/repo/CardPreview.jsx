import React from 'react';
import TechTag from '../profile/TechTag';
import ProjectImage from '../profile/ProjectImage';

let repoTitle = {
  'fontSize': '1.6rem',
  'marginBottom': '8px'
}
let linkStyle = {
  'fontSize': '.7rem',
  'color': 'rgb(64, 91, 130)',
  'marginBottom': '3px'
}
let projectTag = {
  'fontSize': '1rem'
}
let imageWrapper = {
  'marginTop': '12px',
  'borderBottom': '1px solid #e1e7e2',
  'marginBottom': '12px'
}
let summaryStyle = {
  'fontSize': '.85rem'
}

export default class ActiveProjectCard extends React.Component {
  render() {
    console.log(this.props.repoInfo);
    let techArray = this.props.repoInfo.technology.map( (el, idx) => {
      return <TechTag key={`tech-${idx}`} tech={el} />
    })
    let imageLinks = this.props.repoInfo.imageLinks.map( (el, idx) => {
      return <ProjectImage key={`img-${idx}`} index={idx} linkPath={el} />
    })
    return (
      <div className='project-card'>
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
          <div className='col s12' style={imageWrapper}>
            <div className='project-images'>
              {imageLinks}
            </div>
          </div>
          <div className='col s12'>
            <div className='tech-array'>
              {techArray}
            </div>
          </div>
          <div className='col 12'>
            <div className='summary' style={summaryStyle}>
              {this.props.repoInfo.summary}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
