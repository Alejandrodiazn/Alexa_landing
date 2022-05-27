import React from "react";
import styled from 'styled-components'

const BottomCard = (props) => 
<MasterBox>
    <Box1>
        <Title>{props.titulo}</Title>
    </Box1>
    <Box2>
        <Parrafo>Centro de Desarrollo es un <Enfasis>departamento</Enfasis> dónde nos dedicamos a analizar y dar solución a la Facultad de Informática, la UAQ, y entidades externas mediante <Enfasis>proyectos de desarrollo de software</Enfasis> de manera profesional.</Parrafo>
    </Box2>
</MasterBox>

export default BottomCard

const Parrafo = styled.p`
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
}
`

const Enfasis = styled.span`
    color: #925185;
}
`

const Title = styled.h2`
  color: #2B2B2D;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
}
`

const MasterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 100px;
    gap: 50px;

    width: calc(90.55%/2);
    height: auto;
    
    @media (max-width: 768px) {
        width: 90%;
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