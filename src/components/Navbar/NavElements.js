import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav` 
    background: #F5F5F5;
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
        transform: translate (-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        top: 15px;
        right: 30px; 
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

export const Buton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 45px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    border-radius: 50px;
    background: linear-gradient(#3138E5, #239DFF);
    padding: 10px 25px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: rgba(36,149,253,0.4);
        color: #fff;
    }

`


export const Testnow = styled.a`
  text-decoration:none;
  color: #ffffff;
  font-size: 1rem;


`