import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import { friendsReducer } from './utils/reducers/friendsReducer';
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';

const store = createStore(friendsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);