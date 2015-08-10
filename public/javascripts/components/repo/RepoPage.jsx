import React from 'react';
var Tabs = require('react-simpletabs');
import API from '../../API';
var ReactS3Uploader = require('react-s3-uploader');

import CurrentUserStore from '../../stores/CurrentUserStore';
import ActiveRepoStore from '../../stores/ActiveRepoStore';
import ProjectTech from './ProjectTech';
import ActiveRepoLinks from './ActiveRepoLinks';
import UserActionsCreator from '../../actions/UserActionsCreator';
import ProjectImage from './ProjectImage';

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
let imageSep = {
  'marginBottom': '10px',
  'paddingBottom': '10px'
}
let projectImageHeader = {
  'color': 'rgb(152, 147, 147)',
  'fontSize': '1.5rem',
  'marginBottom': '20px'
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
    this.onUploadFinish = this.onUploadFinish.bind(this);
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
    UserActionsCreator.clearActiveRepo();
  }
  componentDidMount() {
    $(".fancybox").fancybox();
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
    this.state.activeRepo.languages.splice(idx, 1);
    this.setState(this.state);
  }
  removeTechnology(idx) {
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
  onUploadFinish(awsObj) {
    console.log(awsObj);
    this.state.activeRepo.imageLinks.push(awsObj.filename);
    this.setState(this.state);
    console.log(this.state);
  }
  render() {
    let imageLinks = this.state.activeRepo.imageLinks.map( (el, idx) => {
      return <ProjectImage key={`img-${idx}`} index={idx} linkPath={el} />
    })
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
                  Edit Project: {this.state.activeRepo.projectData.name}
                </div>
              </div>
              <div className="col l4 m12 s12">
                <div className="row">
                  <div className="col m12" style={projectSection}>
                    Image Upload
                  </div>
                  <div className="col s12" style={imageSep}>
                    <ReactS3Uploader
                        signingUrl="/s3/sign"
                        accept="image/*"
                        onProgress={this.onUploadProgress}
                        onError={this.onUploadError}
                        onFinish={this.onUploadFinish}
                    />
                  </div>
                  <div className="col m12" style={projectImageHeader}>
                    Project Images:
                  </div>
                  <div className="col m12">
                    <div className="row">
                      {imageLinks}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l4 m12 s12" style={borderSeperator}>
                <ActiveRepoLinks gitUrl={this.state.activeRepo.projectData.svn_url} />
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
