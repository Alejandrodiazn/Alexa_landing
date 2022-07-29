import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, Buton, Testnow } from './NavElements'


//INDEX NAVBAR & COMPONENTES

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <Bars onClick={toggle}/>
            <NavMenu>
              <NavLink to="/Inicio" activeStyle>
                Inicio
              </NavLink>
              <NavLink to="/Nosotros" activeStyle>
                Nosotros
              </NavLink>
              <NavLink to="/instalacion" activeStyle>
                Instalación
              </NavLink>
              <NavLink to="/acerca_de" activeStyle>
                Acerca de
              </NavLink>
            </NavMenu>
            <Buton><Testnow target="_blank" href="https://www.amazon.com.mx/UAQ-Profesor-del-EXCOBA/dp/B0894WK995">Probar ahora</Testnow></Buton>
        </Nav>
        
    </>
  )
}

export default Navbar

