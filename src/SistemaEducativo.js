import React from "react";
import './App.css'; 

function SistemaEducativo({ onSelectUserType }) {
    return (
      <div className="sistema-educativo-container">
        <div className="sistema-educativo-box">
          <h2>Seleccione su rol:</h2>
          <label>
            <input
              type="radio"
              value="administrador"
              onChange={() => onSelectUserType("administrador")}
            />
            Administrador
          </label>
          <label>
            <input
              type="radio"
              value="padreDeFamilia"
              onChange={() => onSelectUserType("padreDeFamilia")}
            />
            Padre de Familia
          </label>
        </div>
      </div>
    );
  }
  
  export default SistemaEducativo;