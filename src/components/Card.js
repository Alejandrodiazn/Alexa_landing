import React from "react";
import styled from 'styled-components'

const Card = (props) => 
<MasterBox>
  <Box1>
    <Title>{props.titulo}</Title>
  </Box1>
  <Box2>
    <ul>
        <Elista>{props.el1}</Elista>
        <Elista>{props.el2}</Elista>
        <Elista>{props.el3}</Elista>
        <Elista>{props.el4}</Elista>
    </ul>
  </Box2>
</MasterBox>
export default Card


const Title = styled.h2`
  color: #2B2B2D;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
}
`
const Elista = styled.li`
  color: #646464;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
}
`
const MasterBox = styled.div`
    background: #E7E7E7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 100px;
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
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    box-sizing: border-box;
`

const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    box-sizing: border-box;
`