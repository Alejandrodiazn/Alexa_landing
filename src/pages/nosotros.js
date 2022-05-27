import React from "react";
import BottomCard from "../components/BottomCard";

function Nosotros() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BottomCard
        titulo={"¿Quiénes somos?"}
      ></BottomCard>
    </div>
  );
}

export default Nosotros;
