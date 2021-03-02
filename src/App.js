import React from 'react';
import Nav from './Nav'
import './App.css';
import HaikuContainer from './HaikuContainer'
import { BrowserRouter, Route } from 'react-router-dom';

function App(){
    return (
        <>
        <BrowserRouter>
          <Nav />
            <Route exact path="/haikuGenres" >
            <HaikuContainer/>
            </Route>
          </BrowserRouter>
        </>
    );
  }

export default App;