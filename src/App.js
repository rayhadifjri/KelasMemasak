import './App.css';
import React from 'react';
import Nav from './Home/Navbar';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
    return (
    <Router>
      <div className='Navi'>
        <Nav />
        <Home />
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
