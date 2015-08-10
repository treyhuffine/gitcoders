import React from 'react';
import constants from '../../constants';

let imageStyle = {
  'height': '60px',
  'marginBottom': '15px',
  'border': '4px solid #9f9c9c',
  'borderRadius': '5px'
}

export default class ProjectImage extends React.Component {
  componentDidMount() {
    $(".fancybox").fancybox();
  }
  render() {
    return (
      <div className='project-image col s6'>
        <a className="fancybox" rel="group" href={`${constants.AWS_URL}${this.props.linkPath}`}><img src={`${constants.AWS_URL}${this.props.linkPath}`} style={imageStyle} /></a>
      </div>
    )
  }
}
