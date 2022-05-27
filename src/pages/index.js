import React from 'react'
import Card from '../components/Card';

function Inicio() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent:'center', 
      alignItems:'center'}}>
        <Card titulo={"Fácil y accesible para todos"} 
        el1={"Una skill con contenido dinamico"}
        el2={"Podrás estudiar sobre todas las areas básicas de conocimiento"}
        el3={"Te permitirá familiarizarte con el examen"}
        el4={"Tendrás la disponibilidad para estudiar a cualquier hora del día"}></Card>
    </div>
  )
}

export default Inicio