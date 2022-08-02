import React from 'react';
import Nosotros from '../../pages/nosotros';
import {Nav, NavLink, Bars, NavMenu, Buton, Testnow } from './NavElements'


//INDEX NAVBAR & COMPONENTES

const Navbar = ({ toggle, nosotros, LinktoInstalar, top, scrollToSection }) => {

  return (
    <>
        <Nav>
            <Bars onClick={toggle}/>
            <NavMenu>
              <NavLink onClick={() => scrollToSection(top)}to="/Inicio" activeStyle>
                Inicio
              </NavLink>
              <NavLink onClick={() => scrollToSection(nosotros)} to="/Nosotros" activeStyle>
                  Nosotros
              </NavLink>
              <NavLink onClick={LinktoInstalar} to="/Instalacion" activeStyle>
               Instalación
              </NavLink>

            </NavMenu>
            <Buton><Testnow target="_blank" href="https://www.amazon.com.mx/UAQ-Profesor-del-EXCOBA/dp/B0894WK995">Probar ahora</Testnow></Buton>
        </Nav>
        
    </>
  )
}

export default Navbar

