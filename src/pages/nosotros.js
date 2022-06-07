import React from "react";
import styled from 'styled-components'
import BottomCard from "../components/BottomCard";
import BottomCard2 from "../components/BottomCard2";
import MiddleCard from "../components/MiddleCard";
import BannerCD from "../components/BannerCD";
import ImageCD from "../components/ImageCD";

function Nosotros() {
  return (
    
    <>
      
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
    
  );
}

export default Nosotros;
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