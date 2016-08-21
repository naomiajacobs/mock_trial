// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan700, cyan500, grey400, grey100, grey500, white, grey300, fullBlack, darkBlack, pinkA200 } from 'material-ui/styles/colors'
const colorManipulator = require('material-ui/utils/colorManipulator')

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: (0, colorManipulator.fade)(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: (0, colorManipulator.fade)(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: (0, colorManipulator.fade)(darkBlack, 0.07),
    shadowColor: fullBlack
  }
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <RaisedButton label="Hello World!" />
  </MuiThemeProvider>,
  document.getElementById('app')
);
