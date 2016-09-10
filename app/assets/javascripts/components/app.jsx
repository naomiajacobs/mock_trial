import React from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGreyDeepOrange } from 'themes'

import NewTournamentForm from 'components/NewTournamentForm'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={blueGreyDeepOrange}>
        <div>
          <AppBar title="Mock Trial Tournament Runner" />
          <NewTournamentForm />
        </div>
      </MuiThemeProvider>
    )
  }
}

function select(state) {
  return {}
}

export default connect(select)(App)
