import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
    <SidebarContainer isOpen= { isOpen } onClick = {toggle}>
        <Icon onClick={ toggle }>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper >
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="about">
                    Contact
                </SidebarLink>
                <SidebarLink to="about">
                    Home
                </SidebarLink>
                <SidebarLink to="about">
                    another
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/singin">Sig in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
 
   )
}

export default Sidebar