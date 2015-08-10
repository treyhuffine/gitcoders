import React from 'react';
import SingleLanguage from './SingleLanguage';
import SingleTechnology from './SingleTechnology';

let smallSpacer = {
  'marginTop': '10px',
  'marginBottom': '5px'
}
let projectSection = {
  'color': 'rgb(152, 147, 147)',
  'fontSize': '1.5rem',
  'marginBottom': '10px'
}

export default class ProjectTech extends React.Component {
  render() {
    let allLanguages = this.props.languages.map( (el, idx) => {
      return <SingleLanguage language={el} key={idx} index={idx} removeLanguage={this.props.removeLanguage} />
    })
    let allTech = this.props.technology.map( (el, idx) => {
      return <SingleTechnology technology={el} key={idx} index={idx} removeTechnology={this.props.removeTechnology} />
    })
    return (
      <div className="row tech-wrapper">
        <div className="col m12" style={projectSection}>
          Details (Press enter to add)
        </div>
        <div className="col s12">
          <strong>Programming Languages</strong>
        </div>
        <div className="input-field col s12">
          <input id="new-language" type="text" ref="new-language" onKeyUp={this.props.addNewLanguage} />
          <label htmlFor="new-language">Add additional language</label>
        </div>
        <div className="col s12 m12" style={smallSpacer}>
          <strong>Language list:</strong>
        </div>
        <ul className='collection'>
          <li className='collection-item'>
            {this.props.defaultLanguage} (GitHub default)
          </li>
          {allLanguages}
        </ul>
        <div className="col s12">
          <strong>Technology</strong>
        </div>
        <div className="input-field col s12 m6">
          <input id="new-tech" type="text" ref="new-tech" onKeyUp={this.props.addNewTechnology} />
          <label htmlFor="new-tech">Tech</label>
        </div>
        <div className="input-field col s12 m6">
          <input id="tech-version" type="text" ref="tech-version" onKeyUp={this.props.addNewTechnology} />
          <label htmlFor="tech-version">Version (optional)</label>
        </div>
        <ul className='collection'>
          {allTech}
        </ul>
      </div>
    )
  }
}
