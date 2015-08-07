import $ from '../../vendor/jquery.min';
import React from 'react';
import AllProjectList from './AllProjectList';
import ActiveProjectList from './ActiveProjectList'

let topBuffer = {
  'marginTop': '30px',
  'marginBottom': '30px'
}
let tabTitle = {
  'fontSize': '2rem',
  'color': 'rgb(180, 180, 180)',
  'borderBottom': '1px solid rgb(180, 180, 180)',
  'textAlign': 'center',
  'marginBottom': '15px',
  'paddingBottom': '15px'
}
let projectSection = {
  'color': 'rgb(152, 147, 147)',
  'fontSize': '1.5rem',
  'marginBottom': '10px'
}
let inputField = {
  'marginTop': '0'
}
let searchBar = {
  'height': '1.5rem',
  'marginBottom': '0'
}

export default class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repoList: this.props.userData.currentUser.repos.repoList};
    this.makeActiveRepo = this.makeActiveRepo.bind(this);
    this.makeInactiveRepo = this.makeInactiveRepo.bind(this);
    this.filterWord = this.filterWord.bind(this);
  }
  makeActiveRepo(idx) {
    this.state.repoList[idx].isActive = true;
    this.setState({
      repoList: this.state.repoList
    });
  }
  makeInactiveRepo(idx) {
    this.state.repoList[idx].isActive = false;
    this.setState({
      repoList: this.state.repoList
    });
  }
  filterWord() {
    this.setState({filteredWord: $("#filter-projects").val()})
  }
  render() {
    return (
      <div className="row card-panel grey lighten-5" style={topBuffer}>
        <div className="project-wrapper">
          <div className="tab-title col m12 s12" style={tabTitle}>
            Edit Projects
          </div>
          <div className="col m6 s12 pending-projects">
            <div className="row">
              <div className="col m12 s12" style={projectSection}>
                Active Projects
              </div>
            </div>
            <div className="row">
              <div className="col m12 s12">
                <ActiveProjectList allRepos={this.state.repoList} makeInactiveRepo={this.makeInactiveRepo} />
              </div>
            </div>
          </div>
          <div className="col m6 s12 pending-projects">
            <div className="row">
              <div className="col m4 s12" style={projectSection}>
                All Projects
              </div>
              <div className="col m8 s12 input-field" style={inputField}>
                <input id="filter-projects" type="text" ref="filterProjects" placeholder="Start typing to filter..." style={searchBar} onKeyUp={this.filterWord}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12 s12">
                <AllProjectList allRepos={this.state.repoList} makeActiveRepo={this.makeActiveRepo} filteredWord={this.state.filteredWord || ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
