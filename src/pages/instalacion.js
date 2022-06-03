import React from "react";
import styled from 'styled-components'

function Instalacion() {
  return (
    
    <>
      <div>
        <p>Hola mundo</p>
      </div>
      <MasterBox>

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