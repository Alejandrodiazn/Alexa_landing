
import React, {useState} from 'react';
import './App.css';
import { useRef } from 'react';

import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Sidebar from './components/Sidebar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/index';
import Nosotros from './pages/nosotros';
import Instalacion from './pages/instalacion';


//APP JS PRINCIPAL DE LA PÁGINA

function App() {
  const [isOpen, setIsOpen] = useState (false);

  const top = useRef(null);
  const nosotros = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

   const toggle = () => {
    setIsOpen (!isOpen);
   }

   const LinktoInstalar= () => {
    console.log("Enrutado a instalar");
    window.open("https://youtu.be/3nGe193gbmo")
   }


  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar nosotros={nosotros} top={top} toggle= {toggle} LinktoInstalar={LinktoInstalar} scrollToSection={scrollToSection}/>
        <Routes>
          <Route path='/Inicio' element={<Inicio/>}></Route>
          <Route  path='/Nosotros' element={<Nosotros/>}></Route>
          <Route   path='/Instalacion' element={<Instalacion/>}></Route>
        </Routes>
      </Router>
      <Mainpage nosotros={nosotros} top={top}/>
    </>
  );
}

export default App;
