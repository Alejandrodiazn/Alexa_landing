import React from "react";
import styled from 'styled-components';


const Footer = () => 

<MasterBox>
    <Box>
        <Titulo>Soporte</Titulo>
        <Link>FAQ</Link>
        <Link>Contactanos</Link>
        <Link>Aviso de privacidad</Link>
        <Link>Terminos del servicio</Link>
    </Box>
</MasterBox>

export default Footer

//Propiedades de texto
const Link = styled.p`
  padding: 15px 90px;
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 90px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 90px;
  }
  @media (max-width: 600px){
    font-size: 1rem;
    padding: 15px 40px;
  }
`

const Box = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    padding: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 400px){
    
  }
`

const MasterBox = styled.div`
    width: 100%;
    height: 350px;
    background: #0E2D33;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    
    @media (max-width: 1000px) {
        height: 350px;
    }
    @media (max-width: 768px) {
        height: 290px;
    }
    @media (max-width: 600px){
        height: 320px;
    }

`

const Titulo = styled.p`
  padding: 15px 90px;
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 90px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 90px;
  }
  @media (max-width: 600px){
    font-size: 1rem;
    padding: 15px 40px;
  }
`