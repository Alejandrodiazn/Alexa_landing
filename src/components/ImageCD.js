import React from "react";
import styled from 'styled-components';
import Centro_de_Desarrollo from "../assets/img/Centro_de_Desarrollo.svg"

const ImageCD = (props) =>
<Box>
    <img src={Centro_de_Desarrollo} alt="Logo de Centro de Desarrollo"/>
</Box>

export default ImageCD

const Box = styled.div`
  padding: 30px 40px;
  width: 50%;
`