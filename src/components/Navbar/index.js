import React from 'react';
import {Nav, NavLink, Bars, NavMenu, Buton, Testnow } from './NavElements'
import { Link } from "react-scroll";


//INDEX NAVBAR & COMPONENTES

const Navbar = ({ toggle, DowntoNosotros }) => {
  return (
    <>
        <Nav>
            <Bars onClick={toggle}/>
            <NavMenu>
              <NavLink to="/Inicio" activeStyle>
                Inicio
              </NavLink>
              <NavLink to="Hooal" activeStyle>
                <Link 
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={DowntoNosotros}>
                  Nosotros
                </Link>
              </NavLink>
              <NavLink to="/instalacion" activeStyle>
                Instalación
              </NavLink>

            </NavMenu>
            <Buton><Testnow target="_blank" href="https://www.amazon.com.mx/UAQ-Profesor-del-EXCOBA/dp/B0894WK995">Probar ahora</Testnow></Buton>
        </Nav>
        
    </>
  )
}

export default Navbar

