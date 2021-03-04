import React from 'react';
import Nav from './Nav'
import './App.css';
import HaikuContainer from './HaikuContainer'
import { BrowserRouter} from 'react-router-dom';

function App(){
    return (
        <>
        <BrowserRouter>
          <Nav />
            <HaikuContainer/>
          </BrowserRouter>
        </>
    );
  }

export default App;