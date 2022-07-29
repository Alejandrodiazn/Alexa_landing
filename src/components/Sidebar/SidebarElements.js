import styled from "styled-components";

import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d060d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0%' )};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and(max-width: 480px){
        grid-template-row: repeat(6,60px)
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: linear-gradient(#3138E5, #239DFF);
        transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const Testnow = styled.a`
  text-decoration:none;
  color: #ffffff;
  font-size: 1rem;
`

export const Buton = styled.button`
  border-radius: 50px;
  background: linear-gradient(#3138E5, #239DFF);
  padding: 10px 30px;
  color: #fff;
  border: none;
  width: auto;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      background: rgba(36,149,253,0.4);
      color: #fff;
  }
`