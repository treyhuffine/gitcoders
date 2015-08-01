import $ from './vendor/jquery.min'
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './Root';

const rootElement = document.getElementById('root');

$(document).ready( () => {
  ReactDOM.render(<Root history={history} />, rootElement)
})
