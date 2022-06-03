import React from "react";
import styled from 'styled-components'

const MiddleCard = (props) => 
<MasterBox>
    <Box1>
        <Title>{props.titulo}</Title>
    </Box1>
    <Box2>
        <Parrafo>Centro de desarrollo, un departamento dónde ofrecemos soluciones informáticas analizando y diseñando software a tu medida.</Parrafo>
    </Box2>
</MasterBox>

export default MiddleCard

const Parrafo = styled.p`
    color: #FFFFFF;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 400px){
    font-size: 0.9rem;
  }
`

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px){
    font-size: 1rem;
  }
`

const MasterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 100px;
    gap: 30px;
    width: calc(90.55%/2);
    height: auto;
    background-color: #FCFCFC;
    
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 400px){
        padding: 10px 33px;
    }
`

const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px;
    gap: 10px;
    box-sizing: border-box;
`

const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px;
    gap: 10px;
    box-sizing: border-box;
`