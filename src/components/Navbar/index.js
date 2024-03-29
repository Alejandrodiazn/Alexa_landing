import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements'

//INDEX NAVBAR

const Navbar = () => {
  return (
    <>
        <Nav>
            <Bars />
            <NavMenu>
              <NavLink to="/Inicio" activeStyle>
                Inicio
              </NavLink>
              <NavLink to="/nosotros" activeStyle>
                Nosotros
              </NavLink>
              <NavLink to="/instalacion" activeStyle>
                Instalación
              </NavLink>
              <NavLink to="/acerca_de" activeStyle>
                Acerca de
              </NavLink>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/Probar ahora">Probar ahora</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar