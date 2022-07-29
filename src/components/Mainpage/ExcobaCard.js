import React from "react";
import styled from "styled-components";

import ImageExcoba from "./ImageExcoba.js";

const ExcobaCard = (props) => (
    <MasterBox>
      <div>
        <ImageExcoba></ImageExcoba>
      </div>
      <BoxContent>
        <div>
          <Title>{props.titulo}</Title>
        </div>
        <div>
          <Parrafo>Con ayuda de centro de desarrollo de la facultad de informática de la uaq.</Parrafo>
        </div>
        <div>
          <Boton><Testnow target="_blank" href="https://www.uaq.mx/informatica/cede.html">Leer más</Testnow></Boton>
        </div>
      </BoxContent>
    </MasterBox>
);

export default ExcobaCard;

const MasterBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 30px 30px;
  height: auto;
  width: 70%;
  //background-color: red;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 90%;
  }
  @media (max-width: 400px) {
    padding: 10px 33px;
  }
`;

const BoxContent = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`



const Parrafo = styled.p`
font-size: 1.25rem;
color: #646464;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;




const Boton = styled.button`
  background-color: #FFFFFF;
  display: flex;
  border-style: none;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 25px;
  padding:10px 28px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 1.98582px -0.992908px 3.97163px rgba(107, 107, 107, 1);
`;

const Testnow = styled.a`
  text-decoration:none;
  color: #000000;
  font-size: 18px;
`
