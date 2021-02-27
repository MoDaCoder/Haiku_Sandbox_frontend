// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
// import haikuReducer from './reducers/haikuReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import {Provider} from 'react-redux'
// import thunk from "redux-thunk"

// const initialState = {}
// const store = createStore(haikuReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App/>
//       </Provider>
//   </Router>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();