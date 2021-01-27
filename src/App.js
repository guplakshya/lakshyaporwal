import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Des1 from './components/pages/Des1'
import Des2 from './components/pages/Des2'
import Des3 from './components/pages/Des3'
import Des4 from './components/pages/Des4'
import Des5 from './components/pages/Des5'
import Des6 from './components/pages/Des6'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/project' component={Project}/>
          <Route path='/Des1' component={Des1}/>
          <Route path='/Des2' component={Des2}/>
          <Route path='/Des3' component={Des3}/>
          <Route path='/Des4' component={Des4}/>
          <Route path='/Des5' component={Des5}/>
          <Route path='/Des6' component={Des6}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
