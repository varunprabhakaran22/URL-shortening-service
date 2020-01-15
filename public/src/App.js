import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import LandingPage from './components/LandingPage/LandingPage'
import CreateUser from './components/CreateUser/CreateUser'

function App() {
  return (
      <Switch>
        <Route exact path ="/" component={ LandingPage }/>
        <Route exact path ="/loginPage" component={ Login }/>
        <Route exact path ="/createUser" component={ CreateUser }/>
        <Route exact path ="/homepage" component={ HomePage}/>
        <Route  exact path ="/about" component={ About}/>
        <Route  exact  path ="/contact" component={ Contact}/>
      </Switch>
  );
}

export default App;
