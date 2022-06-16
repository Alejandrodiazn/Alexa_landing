import React from "react";
import styled from "styled-components";
import ExcobaCard from "../components/ExcobaCard";
import ImageExcoba from "../components/ImageExcoba";

function Instalacion() {
  return (
    <>
      <MasterBox>
        <Box>
          <ExcobaCard titulo={"La discapacidad visual ya no es un límite para tus estudios"}></ExcobaCard>
          <ImageExcoba></ImageExcoba>
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
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-drection: row;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
