import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
      <Switch>
        <Route exact path ="/" component={ HomePage}/>
        <Route  exact path ="/about" component={ About}/>
        <Route  exact  path ="/contact" component={ Contact}/>
      </Switch>
    
  );
}

export default App;
