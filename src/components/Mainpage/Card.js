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
  padding: 0px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }


  @media (max-width: 400px) {
    font-size: 1rem;
  }
`
const Elista = styled.li`
  color: #646464;
  margin-top: 35px;
  font-size: 1.25rem;
  @media (max-width: 950px) {
    font-size: 1.05rem;
    margin-top: 25px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 10px;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
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
    
    @media (max-width: 1265px) {
      width: 90%;
      gap: 30px;
    }


    @media (max-width: 768px) {
      width: 90%;
      gap: 10px;
    }
`

const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 0px;
    box-sizing: border-box;
    //background: red;
    width: 100%;
    height: auto;
`

const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0px;
    box-sizing: border-box;
    //background: green;
`