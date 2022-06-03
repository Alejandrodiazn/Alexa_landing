import React from "react";
import styled from 'styled-components'
import BottomCard from "../components/BottomCard";
import BottomCard2 from "../components/BottomCard2";
import BannerCD from "../components/BannerCD";

function Nosotros() {
  return (
    
    <>
      
      
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

const Section5 = styled.div`
    display: flex;
    width: 100%;
    flex-drection: row;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`



const Section6 = styled.div`
    display: flex;
    width: 100%;
    flex-drection: row;
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`