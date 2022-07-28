import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav` 
    background: #F5F5F5;
    poso
    height: 60px;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    position: fixed;
    top: 0; 
    width: 100%;
`

export const NavLink = styled(Link)`
    color: #424242;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 0.98rem;
    

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color: rgba(0,0,0,0.5);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 2.7%;
        right: 4%;
        transform: translate (-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media(max-width: 768px) {
        display: none;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 45px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 15px;
    background: linear-gradient(#3138E5, #239DFF);
    padding: 10px 30px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        background: rgba(36,149,253,0.4);
        color: #fff;
    }

`