
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/index';

//APP JS PRINCIPAL DE LA PÁGINA

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Inicio' element={<Inicio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
