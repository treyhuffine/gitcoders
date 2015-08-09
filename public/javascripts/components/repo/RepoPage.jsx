import React from 'react';
var Tabs = require('react-simpletabs');
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ActiveRepoStore from '../../stores/ActiveRepoStore';

let getCurrentUserFromStore = () => {
  return { currentUser: CurrentUserStore.getCurrentUser() };
}
let getActiveRepoFromStore = () => {
  return { activeRepo: ActiveRepoStore.getActiveRepo() }
}

let topBuffer = {
  'marginTop': '30px',
  'marginBottom': '30px'
}
let tabTitle = {
  'fontSize': '2rem',
  'color': 'rgb(180, 180, 180)',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'marginBottom': '15px',
  'paddingBottom': '15px'
}
let projectSection = {
  'color': 'rgb(152, 147, 147)',
  'fontSize': '1.5rem',
  'marginBottom': '10px'
}
let linkTag = {
  'marginTop': '9px'
}
let inputStyle = {
  'height': '2rem'
}
let bottomBuffer = {
  'marginBottom': '10px'
}
let smallSpacer = {
  'marginTop': '10px',
  'marginBottom': '5px'
}
let borderSeperator = {
  'borderRight': '1px solid #B4B4B4',
  'borderLeft': '1px solid #B4B4B4'
}
let buttonStyle = {
  'verticalAlign': 'top',
  'width': '150px'
}
let buttonFont = {
  'verticalAlign': 'top',
  'marginRight': '10px',
  'fontSize': '.7rem'
}
let iconSize = {
  'fontSize': '.8rem'
}

export default class RepoPage extends React.Component {
  constructor(props) {
    super(props);
    let { params } = this.props;
    API.getActiveRepo(params.repoid);
    this.state = getActiveRepoFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getCurrentUserFromStore());
    this.setState(getActiveRepoFromStore());
  }
  componentWillMount() {
    CurrentUserStore.addChangeListener(this.onStoreChange);
    ActiveRepoStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this.onStoreChange);
    ActiveRepoStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    console.log(this.state);
    return (
      <div className="active-repo-wrapper">
        <Tabs>
          <Tabs.Panel title='Edit Project'>

            <div className="row card-panel white" style={topBuffer}>
              <div className="tab-title col m12 s12">
                <button className="btn waves-effect waves-light green right" style={buttonStyle} onClick={this.saveProjects}>
                  <span style={buttonFont}>Save Active</span>
                  <i className="material-icons" style={iconSize}>done</i>
                </button>
                <div style={tabTitle}>
                  Edit Project
                </div>
              </div>
              <div className="col m4 s12">
                <div className="row">
                  <div className="col m12" style={projectSection}>
                    Image Upload:
                  </div>
                  <div className="col s12" style={{'cursor': 'pointer'}}>
                    <div className="file-field">
                      <input className="file-path" type="text" placeholder="Click here to upload file..."/>
                      <span>
                        <input type="file" />
                      </span>
                    </div>
                  </div>
                  <div className="col s12">
                    Image list..
                  </div>
                </div>
              </div>
              <div className="col m4 s12" style={borderSeperator}>
                <div className="row">
                  <div className="col m12" style={projectSection}>
                    Links:
                  </div>
                  <div className="git-url">
                    <div className="col s12 m12" style={bottomBuffer}>
                      <a href={`${this.state.activeRepo.projectData.svn_url}`}>GitHub Repo URL</a>
                    </div>
                  </div>
                  <div className="col s12">
                    <strong>Live Project URL</strong>
                  </div>
                  <div className="input-field col s12">
                    <input id="live-porject-site" type="url" ref="live-site"/>
                    <label htmlFor="live-porject-site">Project site</label>
                  </div>
                  <div className="col s12">
                    <strong>Brief project summary</strong>
                  </div>
                  <div className="input-field col s12">
                    <input id="edit-project-tagline" type="text" className="validate" ref="tagline" maxLength="140"/>
                    <label htmlFor="edit-project-tagline">Project tagline</label>
                  </div>
                  <div className="col s12">
                    <strong>Brief project summary</strong>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="project-description" type="text" className="materialize-textarea validate" length="1000" maxLength="1000" ref="bio"></textarea>
                    <label htmlFor="project-description">Summary</label>
                  </div>
                </div>
              </div>
              <div className="col m4 s12">
                <div className="row">
                  <div className="col m12" style={projectSection}>
                    Details
                  </div>
                  <div className="col s12">
                    <strong>Programming Languages</strong>
                  </div>
                  <div className="input-field col s12">
                    <input id="new-language" type="text" ref="new-language" />
                    <label htmlFor="new-language">Add additional language</label>
                  </div>
                  <div className="col s12 m12" style={smallSpacer}>
                    GitHub Default (added automatically): {`${this.state.activeRepo.projectData.language}`}
                  </div>
                  <div className="col s12">
                    <strong>Tech</strong>
                  </div>
                  <div className="input-field col s12 m6">
                    <input id="new-tech" type="text" ref="new-tech" />
                    <label htmlFor="new-tech">Tech</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <input id="tech-version" type="text" ref="tech-version" />
                    <label htmlFor="tech-version">Version (optional)</label>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel title='Preview'>
            <h1>Preview</h1>
          </Tabs.Panel>
        </Tabs>
      </div>
    )
  }
}
