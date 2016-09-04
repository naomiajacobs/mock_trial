import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer'

const store = applyMiddleware(thunk)(createStore)(appReducer);

store.subscribe(function() {
  console.log('current state:', store.getState());
});

export default store
