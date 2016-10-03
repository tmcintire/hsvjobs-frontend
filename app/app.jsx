import React from 'react';
import ReactDOM from 'react-dom';


// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 2 Project </p>,
  document.getElementById('app')
);
