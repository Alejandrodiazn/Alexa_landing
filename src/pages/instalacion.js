import React from "react";
import styled from "styled-components";
import MiddleCard from "../components/MiddleCard";
import ImageCD from "../components/ImageCD";

function Instalacion() {
  return (
    <>
      <MasterBox>
        <Box>
          <ImageCD></ImageCD>
          <MiddleCard titulo={"Sobre nosotros"}></MiddleCard>
        </Box>
      </MasterBox>
    </>
  );
}

export default Instalacion;

const MasterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 40px;
  background: linear-gradient(94.68deg, #5974EC 0%, #B968A4 100.6%);
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-drection: row;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
