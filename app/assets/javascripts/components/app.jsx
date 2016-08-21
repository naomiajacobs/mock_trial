import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyanDeepPurple } from 'themes'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={cyanDeepPurple}>
        <AppBar title="Hello World!" />
      </MuiThemeProvider>
    )
  }
}

export default App
