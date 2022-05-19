
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

//APP JS PRINCIPAL DE LA PÁGINA

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
