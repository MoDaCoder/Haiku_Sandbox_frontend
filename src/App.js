import React from 'react';
import Navbar from './Navbar'
import HaikuContainer from './HaikuContainer'
import './App.css';

class App extends React.Component {
  componentDidMount(){
    fetch(`http://localhost:3000/haikus`)
    .then(resp=>resp.json())
    .then(console.log)
  }
  render(){
    return (
      <>
        <Navbar/>
        <HaikuContainer/>
      </>
    );
  }
}

export default App;
