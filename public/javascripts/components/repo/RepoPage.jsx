import React from 'react';
import $ from '../../vendor/jquery.min';
var Tabs = require('react-simpletabs');
import API from '../../API';

import CurrentUserStore from '../../stores/CurrentUserStore';
import ActiveRepoStore from '../../stores/ActiveRepoStore';
import ProjectTech from './ProjectTech';

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
    this.addNewLanguage = this.addNewLanguage.bind(this);
    this.removeLanguage = this.removeLanguage.bind(this);
    this.addNewTechnology = this.addNewTechnology.bind(this);
    this.removeTechnology = this.removeTechnology.bind(this);
    this.saveProject = this.saveProject.bind(this);
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
  addNewLanguage(e) {
    if (e.keyCode === 13 && $('#new-language').val()) {
      this.state.activeRepo.languages.push($('#new-language').val().trim());
      $('#new-language').val('');
      this.setState(this.state);
      console.log(this.state);
    }
  }
  addNewTechnology(e) {
    if (e.keyCode === 13 && $('#new-tech').val()) {
      this.state.activeRepo.technology.push( ($('#new-tech').val().trim() + ' ' + $('#tech-version').val().trim()).trim() );
      $('#new-tech').val('');
      $('#tech-version').val('');
      this.setState(this.state);
    }
  }
  removeLanguage(idx) {
    console.log(idx);
    this.state.activeRepo.languages.splice(idx, 1);
    this.setState(this.state);
  }
  removeTechnology(idx) {
    console.log(idx);
    console.log(this.state);
    this.state.activeRepo.technology.splice(idx, 1);
    this.setState(this.state);
  }
  saveProject() {
    this.state.activeRepo.summary = $('#project-description').val();
    this.state.activeRepo.projectTagline = $('#edit-project-tagline').val();
    this.state.activeRepo.liveSiteLink = $('#live-porject-site').val();
    this.setState(this.state);
    API.saveProject(this.state.activeRepo);
  }
  render() {
    console.log(this.state);
    return (
      <div className="active-repo-wrapper">
        <Tabs>
          <Tabs.Panel title='Edit Project'>

            <div className="row card-panel white" style={topBuffer}>
              <div className="tab-title col m12 s12">
                <button className="btn waves-effect waves-light green right" style={buttonStyle} onClick={this.saveProject}>
                  <span style={buttonFont}>Save Project</span>
                  <i className="material-icons" style={iconSize}>done</i>
                </button>
                <div style={tabTitle}>
                  Edit Project
                </div>
              </div>
              <div className="col l4 m12 s12">
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
              <div className="col l4 m12 s12" style={borderSeperator}>
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
              </div>
              <div className="col l4 m12 s12">
                <ProjectTech addNewLanguage={this.addNewLanguage}
                             removeLanguage={this.removeLanguage}
                             languages={this.state.activeRepo.languages}
                             defaultLanguage={this.state.activeRepo.projectData.language}
                             addNewTechnology={this.addNewTechnology}
                             removeTechnology={this.removeTechnology}
                             technology={this.state.activeRepo.technology}
                />
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
