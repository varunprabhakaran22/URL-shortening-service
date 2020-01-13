import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'

function App() {
  return (
      <Switch>
        <Route exact path ="/" component={ Header}/>
        <Route  exact path ="/about" component={ About}/>
        <Route  exact  path ="/contact" component={ Contact}/>
      </Switch>
    
  );
}

export default App;
