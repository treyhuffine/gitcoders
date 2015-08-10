import React from 'react';
import constants from '../../constants';

let imageStyle = {
  'width': '80px',
  'display': 'block',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'marginBottom': '15px'
}

export default class ProjectImage extends React.Component {
  componentDidMount() {
    $(".fancybox").fancybox();
  }
  render() {
    return (
      <div className='project-image'>
        <a className="fancybox" rel="group" href={`${constants.AWS_URL}${this.props.linkPath}`}><img src={`${constants.AWS_URL}${this.props.linkPath}`} style={imageStyle} /></a>
      </div>
    )
  }
}
