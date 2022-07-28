import React from "react";
import styled from 'styled-components';
import voice1 from "../../assets/img/cardalexa/bubble1.svg";
import voice2 from "../../assets/img/cardalexa/bubble2.svg";
import voice3 from "../../assets/img/cardalexa/bubble3.svg";
import voice4 from "../../assets/img/cardalexa/bubble4.svg";

import voiceffect from "../../assets/img/cardalexa/image_voice.png";

const TalkCard = () => 
<MasterBox>
    <Box1>
        <Title>Usa sólo tu voz</Title>
    </Box1>
    <Box2>
        <BurbujaContainer>
            <Imagen13 src={voice1}/>
        </BurbujaContainer>

        <BurbujaContainer2>
            <Imagen24 src={voice2}/>
        </BurbujaContainer2>

        <BurbujaContainer>
            <Imagen13 src={voice3}/>
        </BurbujaContainer>

        <BurbujaContainer2>
            <Imagen24 src={voice4}/>
        </BurbujaContainer2>
    </Box2>
    
    <Box3>
        <Imagenvoice src={voiceffect}/>
    </Box3>
</MasterBox>

export default TalkCard

//Propiedades de texto
const Title = styled.h2`
  color: #2B2B2D;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 400px){
    font-size: 1rem;
  }
`


//Propiedades containers

const Imagenvoice = styled.img`


`


const Imagen24 = styled.img`
    width: 240px;
    @media (max-width: 1100px) {
        width: 200px;
    }
    @media(max-width: 900px){
        width: 190px;
    }
    
    @media (max-width: 850px) {
        width: 180px;
    }

    @media (max-width: 800px) {
        width: 170px;
    }
`
const Imagen13 = styled.img`
    width: 200px;
    @media (max-width: 1100px) {
        width: 160px;
    }
    @media(max-width: 900px){
        width: 150px;
    }
    @media (max-width: 850px) {
        width: 140px;
    }
`
const BurbujaContainer = styled.div`
    position: relative;
    left: -50%;
    width: auto;
`
const BurbujaContainer2 = styled.div`
    position: relative;
    right: -50%;
    width: auto;
`
const MasterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    padding-top: 30px;
    gap: 20px;
    width: calc(90.55%/2);
    height: auto;
    background-color: #E7E7E7;;
    
    
    @media (max-width: 1000px) {
      padding: 10px 33px;
    }
    @media (max-width: 768px) {
        width: 90%;
        align-items: center;
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
    padding: 0px;
    gap: 0px;
    box-sizing: border-box;
`
const Box3 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0px;
    box-sizing: border-box;
`