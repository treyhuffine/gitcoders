import React from 'react';

let bottomBuffer = {
  'marginBottom': '10px'
}
let projectSection = {
  'color': 'rgb(152, 147, 147)',
  'fontSize': '1.5rem',
  'marginBottom': '10px'
}

export default class ActiveRepoLinks extends React.Component {
  render() {
    return (
      <div className="row repo-links-wrapper">
        <div className="col m12" style={projectSection}>
          Links:
        </div>
        <div className="git-url">
          <div className="col s12 m12" style={bottomBuffer}>
            <a href={this.props.gitUrl}>GitHub Repo URL</a>
          </div>
        </div>
        <div className="col s12">
          <strong>Live Project URL</strong>
        </div>
        <div className="input-field col s12">
          <input id="live-porject-site" type="url" ref="live-site" className='validate'/>
          <label htmlFor="live-porject-site">Project site</label>
        </div>
        <div className="col s12">
          <strong>Give it a strong first impression</strong>
        </div>
        <div className="input-field col s12">
          <input id="edit-project-tagline" type="text" ref="tagline" maxLength="140"/>
          <label htmlFor="edit-project-tagline">Project tagline</label>
        </div>
        <div className="col s12">
          <strong>Brief project summary</strong>
        </div>
        <div className="input-field col s12">
          <textarea id="project-description" type="text" className="materialize-textarea" length="1000" maxLength="1000" ref="bio"></textarea>
          <label htmlFor="project-description">Summary</label>
        </div>
      </div>
    )
  }
}
