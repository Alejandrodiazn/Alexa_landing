import React from "react";
import styled from 'styled-components';
import voice1 from "../assets/img/cardalexa/voice1.svg";
import voice2 from "../assets/img/cardalexa/voice2.svg";
import voiceffect from "../assets/img/cardalexa/image_voice.png";

const TalkCard = () => 
<MasterBox>
    <Box1>
        <Title>Usa sólo tu voz</Title>
    </Box1>
    <Box2>
        <BurbujaContainer>
            <BurbujaText>Alexa ábre la skill de <Enfasis>'examen excoba'</Enfasis></BurbujaText>
            <img src={voice1}/>
        </BurbujaContainer>

        <BurbujaContainer2>
            <BurbujaText>Bienvenidx a la skill de examen  <Enfasis>'examen excoba'</Enfasis> ¿Comenzamos tu prueba? </BurbujaText>
            <img src={voice2}/>
        </BurbujaContainer2>

        <BurbujaContainer>
            <BurbujaText>Por supuesto que si, estoy listo</BurbujaText>
            <img src={voice1}/>
        </BurbujaContainer>

        <BurbujaContainer2>
            <BurbujaText>Pregunta 1, Escucha el siguiente texto sobre los incas y responde.</BurbujaText>
            <img src={voice2}/>
        </BurbujaContainer2>
    </Box2>
    
    <Box3>
        <img src={voiceffect}/>
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
const Enfasis = styled.span`
    color: #0EB1F8;
`
const BurbujaText = styled.p`
    position: absolute;
    top: 12%;
    font-size: 15px;
`



//Propiedades containers

const BurbujaContainer = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
`
const BurbujaContainer2 = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
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