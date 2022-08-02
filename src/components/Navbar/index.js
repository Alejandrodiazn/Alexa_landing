import React from 'react';
import {Nav, NavLink, Bars, NavMenu, Buton, Testnow } from './NavElements'
import { Link } from "react-scroll";


//INDEX NAVBAR & COMPONENTES

const Navbar = ({ toggle, DowntoNosotros, LinktoInstalar, ToptoInicio }) => {
  return (
    <>
        <Nav>
            <Bars onClick={toggle}/>
            <NavMenu>
              <NavLink onClick={ToptoInicio}to="/Inicio" activeStyle>
                Inicio
              </NavLink>
              <NavLink onClick={DowntoNosotros} to="/Nosotros" activeStyle>
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

