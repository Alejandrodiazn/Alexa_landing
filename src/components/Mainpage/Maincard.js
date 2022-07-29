import React from "react";
import styled from 'styled-components';
import alexabackground from "../../assets/img/maincard/alexa-background.png"
import titulo from "../../assets/img/maincard/Titulo.svg"

const MainCard = () => 
<MasterBox>
    <Box>
        <Titulo src={titulo}></Titulo>
        <Parrafo>Tú enfocate en estudiar y nosotros nos encargamos del reconocimiento automático del habla y de la comprensión del lenguaje natural para ir contestando las preguntas de nuestra guía</Parrafo>
        <Buton onClick={() => console.log('Click')}><Testnow target="_blank" href="https://www.amazon.com.mx/UAQ-Profesor-del-EXCOBA/dp/B0894WK995">Probar ahora</Testnow></Buton>
    </Box>
</MasterBox>

export default MainCard

//


//Propiedades de texto
const Parrafo = styled.p`
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
    margin-top: 7%;
    padding: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    //background-color: red;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 400px){
    
  }
`
const MasterBox = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${alexabackground});
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E7E7E7;;
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
const Titulo = styled.img`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 1000px) {
        
    }
    @media (max-width: 768px) {
      width: 90%;
      margin-left: 16%;
    }
    @media (max-width: 400px){
        
    }

`

const Buton = styled.button`
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


const Testnow = styled.a`
  text-decoration:none;
  color: #ffffff;
  font-size: 1rem;


`