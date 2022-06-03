import React from "react";
import styled from 'styled-components'
import BottomCard from "../components/BottomCard";
import BottomCard2 from "../components/BottomCard2";
import BannerCD from "../components/BannerCD";
function Nosotros() {
  return (
    
    <>
      <div>
        <BannerCD></BannerCD>
        <p>ESTO ES UNA PRUEBA</p>
      </div>
      <MasterBox>
        
        <BottomCard titulo={"¿Quiénes somos?"}>
        </BottomCard>
        <BottomCard2 titulo={"Un equipo multidisciplinario"}></BottomCard2>  
      </MasterBox>
    </>
    
  );
}

export default Nosotros;

const MasterBox = styled.div`
    display: flex;
    width: 100%;
    flex-drection: row;
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`