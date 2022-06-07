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
  background: linear-gradient(94.68deg, #5974EC 0%, #B968A4 100.6%);
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-drection: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
