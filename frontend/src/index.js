import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import authReducer from './authReducer';

const miStore = createStore(authReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

