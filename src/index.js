import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import haikuReducer from './reducers/haikuReducer'
import thunk  from "redux-thunk"
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const initialState = {}

// const rootReducer = combineReducers({
//   haikus: haikuReducer
// })

const store = createStore(haikuReducer, initialState, composeEnhancer(applyMiddleware(thunk), composeWithDevTools()))
ReactDOM.render(
    <Router>
    <Provider store={store}>
      <App/>
      </Provider>
      </Router>,
  document.getElementById('root')
);