import React from 'react';

let iconStyle = {
  'fontSize': '1.3rem',
  'color': 'rgb(255, 92, 92)',
  'cursor': 'pointer'
}

export default class SingleLanguage extends React.Component {
  constructor(props) {
    super(props);

    this.localRemoveTech = this.localRemoveTech.bind(this);
  }
  localRemoveTech() {
    this.props.removeTechnology(this.props.index);
  }
  render() {
    console.log(this.props);
    return (
      <li className='collection-item'>
        {this.props.technology}
        <i className="material-icons right" style={iconStyle} onClick={this.localRemoveTech}>delete</i>
      </li>
    )
  }
}
