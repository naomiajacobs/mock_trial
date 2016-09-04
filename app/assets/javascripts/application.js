import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/app'
import { Provider } from 'react-redux'
import store from 'reducers/store'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
