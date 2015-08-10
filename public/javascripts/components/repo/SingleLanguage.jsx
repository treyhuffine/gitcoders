import React from 'react';

let iconStyle = {
  'fontSize': '1.3rem',
  'color': 'rgb(255, 92, 92)',
  'cursor': 'pointer'
}

export default class SingleLanguage extends React.Component {
  constructor(props) {
    super(props);

    this.localRemoveLanguage = this.localRemoveLanguage.bind(this);
  }
  localRemoveLanguage() {
    this.props.removeLanguage(this.props.index)
  }
  render() {
    return (
      <li className='collection-item'>
        {this.props.language}
        <i className="material-icons right" style={iconStyle} onClick={this.localRemoveLanguage}>delete</i>
      </li>
    )
  }
}
