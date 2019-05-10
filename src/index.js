import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { formReducer } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import './index.css';
import * as reducers from './reducers'
import registerServiceWorker from './serviceWorker'

const store = createStore(combineReducers({
  ...reducers,
  form: formReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
  registerServiceWorker();
