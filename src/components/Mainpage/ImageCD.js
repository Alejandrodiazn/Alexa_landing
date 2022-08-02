import React from "react";
import styled from 'styled-components';
import Centro_de_Desarrollo from "../../assets/img/Centro_de_Desarrollo.svg"

const ImageCD = () =>
<Box>
    <Imagen src={Centro_de_Desarrollo} alt="Logo de Centro de Desarrollo"/>
</Box>

export default ImageCD

const Box = styled.div`
  padding: 0px;
  width: auto;
  height: auto;
  box-sizing: border-box;
`

const Imagen = styled.img`
  padding: 0px;
  @media (max-width: 768px) {
    width: 180px;
    margin-top: 20px;
  }
`