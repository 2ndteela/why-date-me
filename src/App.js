import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Bio from './pages/Bio'
import Adventure from './pages/Adventure'
import PickUps from './pages/PickUps'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Bio' component={Bio} ></Route>
          <Route path='/Adventure' component={Adventure} ></Route>
          <Route path='/pick-ups' component={PickUps}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
