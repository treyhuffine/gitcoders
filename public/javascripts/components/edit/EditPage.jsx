import $ from '../../vendor/jquery.min';
import React from 'react';

let unauthedEdit = {
  'position': 'absolute',
  'textAlign': 'center',
  'top': '40%',
  'left': '16%'
}

export default class EditPage extends React.Component {
  render() {
    return (
      <div style={unauthedEdit}>
        <h1>Login to edit your account...</h1>
      </div>
    )
  }
}
