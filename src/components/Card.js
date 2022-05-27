import React from "react";
import styled from 'styled-components'

const Card = (props) => 
<div style={{ color: '#000' }}>
  <Title>{props.titulo}</Title>
  <div>
    <ul>
        <li>{props.el1}</li>
        <li>{props.el2}</li>
        <li>{props.el3}</li>
        <li>{props.el4}</li>
    </ul>
  </div>
</div>
export default Card


const Title = styled.h2`
  color: red;
  font-size: 32px;
`
const Elemento_lista = styled.li`
  color: #fff;
  font-size: 24px;
`