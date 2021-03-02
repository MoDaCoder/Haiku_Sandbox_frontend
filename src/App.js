import React from 'react';
import Nav from './Nav'
import './App.css';
import HaikuContainer from './HaikuContainer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Route path="/haikuGenres" component={HaikuContainer} />
          </Switch>
        </>
      </Router>
    );
  }

export default App;