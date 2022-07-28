
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/index';
import Nosotros from './pages/nosotros';
import Instalacion from './pages/instalacion';


//APP JS PRINCIPAL DE LA PÁGINA

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Inicio' element={<Inicio/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
          <Route path='/Instalacion' element={<Instalacion/>}></Route>
        </Routes>
      </Router>
      <Mainpage/>
    </>
  );
}

export default App;
