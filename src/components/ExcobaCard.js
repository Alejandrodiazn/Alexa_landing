import React from "react";
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'

const ExcobaCard = (props) => (
    <MasterBox>
      <Box>
        <Title>{props.titulo}</Title>
      </Box>
      <Box>
        <Parrafo>
          Con ayuda de centro de desarrollo de la facultad de informática de la uaq.
        </Parrafo>
      </Box>
      <Box1>
        <Boton>
            <BtnLink to="#">Leer más</BtnLink>
        </Boton>
      </Box1>
    </MasterBox>
);

export default ExcobaCard;

const Parrafo = styled.p`
  font-size: 1.25rem;
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

const MasterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 10px;
  width: calc(90.55% / 2);
  height: auto;
  margin auto 0;
  margin-left: 20px;
  width: 50%;

  @media (max-width: 768px) {
    align-items: center;
    width: 90%;
  }
  @media (max-width: 400px) {
    padding: 10px 33px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    padding: 0px;
    gap: 10px;
    align-items: center;
    text-align: center;
  }

`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 12pxñ
  padding: 10px 30px;
  @media (max-width: 768px) {
    padding: 0px;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
  
`;

const Boton = styled.button`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  border: 0.770115px solid #000000;
  border-radius: 15px;
  
`;

const BtnLink = styled(Link)`
  color: #000000;
  border-radius: 15px;
  padding: 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
    
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #E7E7E7;
  }

`;