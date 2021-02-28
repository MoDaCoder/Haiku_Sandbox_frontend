// import {BrowserRouter as Router} from 'react-router-dom'
// import haikuReducer from './reducers/haikuReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const initialState = {}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk  from "redux-thunk"
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import haikuReducer from './reducers/haikuReducer.js'

const reducer = combineReducers({
  haiku: haikuReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
    <Provider store={store}>
      <App/>
      </Provider>,
  document.getElementById('root')
);