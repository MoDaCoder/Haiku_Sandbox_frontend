// import {BrowserRouter as Router} from 'react-router-dom'
// import haikuReducer from './reducers/haikuReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const initialState = {}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk  from "redux-thunk"

const users = () => []
const reducer = combineReducers({
  users
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <App/>
      </Provider>,
  document.getElementById('root')
);
reportWebVitals();