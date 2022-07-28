import React from "react";
import styled from 'styled-components';
import Image_Excoba from "../../assets/img/cardskill/Image_Excoba.png"

const ImageExcoba = () =>
<Box>
  <Imagen src={Image_Excoba} alt="Logo del programa Excoba"/>
</Box>

export default ImageExcoba

const Box = styled.div`
  padding: 0px;
  width: auto;
  height: auto;
  box-sizing: border-box;
`

const Imagen = styled.img`
  padding: 0px;
  max-width: 14rem;
  max-height: 14rem;
  
  @media (max-width: 768px) {
    width: 180px;
    margin-top: 20px;
    max-width: 65%;
    max-height: 65%;
  }

`