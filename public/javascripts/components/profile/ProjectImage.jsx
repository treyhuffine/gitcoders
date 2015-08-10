import React from 'react';
import constants from '../../constants';

let imageStyle = {
  'height': '70px',
  'border': '2px solid #9f9c9c',
  'borderRadius': '5px'
}
let imageWrapper = {
  'float': 'left',
  'marginRight': '10px',
  'marginBottom': '10px'
}

export default class ProjectImage extends React.Component {
  componentDidMount() {
    $(".fancybox").fancybox();
  }
  render() {
    return (
      <div className='project-image' style={imageWrapper}>
        <a className="fancybox" rel="group" href={`${constants.AWS_URL}${this.props.linkPath}`}><img src={`${constants.AWS_URL}${this.props.linkPath}`} style={imageStyle} /></a>
      </div>
    )
  }
}
