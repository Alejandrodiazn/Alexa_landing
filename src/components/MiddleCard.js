import React from "react";
import styled from "styled-components";

const MiddleCard = (props) => (
  <MasterBox>
    <Box1>
      <Title>{props.titulo}</Title>
    </Box1>
    <Box2>
      <Parrafo>
        Centro de desarrollo, un departamento dónde ofrecemos soluciones
        informáticas analizando y diseñando software a tu medida.
      </Parrafo>
    </Box2>
  </MasterBox>
);

export default MiddleCard;

const Parrafo = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const MasterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 10px;
  width: calc(90.55% / 2);
  height: auto;
  margin auto 0;

  @media (max-width: 768px) {
    align-items: center;
    width: 90%;
  }
  @media (max-width: 400px) {
    padding: 10px 33px;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0px;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0px;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
`;
