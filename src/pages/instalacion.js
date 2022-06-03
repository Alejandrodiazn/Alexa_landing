import React from "react";
import styled from 'styled-components'
import BannerCD from "../components/BannerCD";
import MiddleCard from "../components/MiddleCard"
import ImageCD from "../components/ImageCD";

function Instalacion() {
  return (
    
    <>
      <div>
        <BannerCD></BannerCD>
      </div>
      <MasterBox>
        <ImageCD></ImageCD>
        <MiddleCard titulo={"Sobre nosotros"}></MiddleCard>
      </MasterBox>
    </>
    
  );
}

export default Instalacion;

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