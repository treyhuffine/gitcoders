import $ from './vendor/jquery.min';
import React from 'react';
import Root from './Root';
import API from './API';

const rootElement = document.getElementById('root');
// Implement cookie and check for user || session

API.getCurrentUser();

$(document).ready( () => {
  React.render(<Root />, rootElement)
})
