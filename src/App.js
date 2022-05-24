
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Background from './components/Background.js'

//APP JS PRINCIPAL DE LA PÁGINA

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
