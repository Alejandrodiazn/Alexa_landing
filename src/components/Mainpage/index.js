import React from 'react';
import styled from "styled-components";

import BottomCard from "./BottomCard";
import BottomCard2 from "./BottomCard2";
import MiddleCard from "./MiddleCard";
import BannerCD from "./BannerCD";
import ImageCD from "./ImageCD";
import Card from './Card';
import TalkCard from './TalkCard';
import ExcobaCard from "./ExcobaCard";
import MainCard from "./Maincard";

//INDEX NAVBAR & COMPONENTES

const Mainpage = () => {
  return (
    <>
        <Section1>
          <MainCard></MainCard>
        </Section1>

        <Section2>
          <ExcobaCard titulo={"La discapacidad visual ya no es un límite para tus estudios"}></ExcobaCard>
        </Section2>

        <Section3>
          <TalkCard></TalkCard>
          <Card titulo={"Fácil y accesible para todos"} 
          el1={"Una skill con contenido dinamico"}
          el2={"Podrás estudiar sobre todas las areas básicas de conocimiento"}
          el3={"Te permitirá familiarizarte con el examen"}
          el4={"Tendrás la disponibilidad para estudiar a cualquier hora del día"}/>
        </Section3>


        <Section4>
          <Innersection4>
            <ImageCD></ImageCD>
            <MiddleCard titulo={"Sobre nosotros"}></MiddleCard>
          </Innersection4>
        </Section4>

        <Section5>
          <BannerCD></BannerCD>
        </Section5>
        
        <Section6>
          <BottomCard titulo={"¿Quiénes somos?"}>
          </BottomCard>
          <BottomCard2 titulo={"Un equipo multidisciplinario"}></BottomCard2>  
        </Section6>
    </>
  )
}

export default Mainpage


const Section1 = styled.div`
    display: flex;
    @media (max-width: 1120px) {
    
    }

    @media (max-width: 900px) { 
      
    }

    @media (max-width: 768px) {
        
      }
`

const Section2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 140px;
    padding: 40px;
    
    @media (max-width: 1120px) {
      padding: 20px ;
      margin: 20px 100px;
    }

    @media (max-width: 900px) { 
      
      margin: 20px 40px;
    }

    @media (max-width: 768px) {
        padding: 0;
        margin: 20px 20px;
      }
`

const Section3 = styled.div`
    display: flex;
    flex-drection: row;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;

    @media (max-width: 1000px) {
      width: 100%;
      gap: 0px;
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`
const Section4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 40px;
  background: linear-gradient(94.68deg, #5974EC 0%, #B968A4 100.6%);

  @media (max-width: 768px) {
    padding: 0px;
    margin-top: 15px;
    margin-botton: 15px;
    margin-left: 0;
    margin-right: 0;
  }
`
    const Innersection4 = styled.div`
      display: flex;
      flex-drection: row;
      align-items: center;
      justify-content: center;
      width: 60%;

      @media (max-width: 1000px) {
        width: 80%;
      }



      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
    `
const Section5 = styled.div`
    display: flex;
    justify-content: center;
    flex-drection: row;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`
const Section6 = styled.div`
    display: flex;
    flex-drection: row;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
  
    @media (max-width: 1000px) {
      width: 100%;
      gap: 0px;
    }



    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`