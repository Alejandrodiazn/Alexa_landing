import React from "react";
import styled from 'styled-components'
import cd_foto from "../assets/img/foto_cd.jpg"

const BannerCD = () => 
<MasterBox>
  <Imagen src={cd_foto}>
  </Imagen>
</MasterBox>
export default BannerCD

const MasterBox = styled.div`
    display: flex;
    width: 90.46%;
    height: 400px;
    background-color: #FCFC;
    padding: 30px 100px;
    
    @media (max-width: 768px) {
        height: 300px;
        padding: 10px 33px;
    }
    @media (max-width: 400px){
        padding: 10px 33px;
        height: 150px;
    }
`

const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`