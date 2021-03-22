import React from 'react';
import Nav from './Nav'
import './App.css';
import HaikuContainer from './HaikuContainer'
import { BrowserRouter} from 'react-router-dom';

// function componentDidMount(){
//   console.log('component mounted')
// }

// function componentDidUpdate(prevProps, prevState){
//   console.log('component updated')
//   console.log(prevProps, prevState)
// }

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