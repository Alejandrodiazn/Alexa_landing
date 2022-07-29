import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, Buton, Testnow } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
    <SidebarContainer isOpen= { isOpen } onClick = {toggle}>
        <Icon onClick={ toggle }>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper >
            <SidebarMenu>
                <SidebarLink to="about">
                    Inicio
                </SidebarLink>
                <SidebarLink to="about">
                    Nosotros
                </SidebarLink>
                <SidebarLink to="about">
                    Instalación
                </SidebarLink>
                <SidebarLink to="about">
                    Acerca de
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <Buton onClick={() => console.log('Click')}><Testnow target="_blank" href="https://www.amazon.com.mx/UAQ-Profesor-del-EXCOBA/dp/B0894WK995">Probar ahora</Testnow></Buton>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
 
   )
}

export default Sidebar

