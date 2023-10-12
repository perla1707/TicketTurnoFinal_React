import React, { useState } from "react";
import SistemaEducativo from "./SistemaEducativo";
import LoginAdmin from "./LoginAdmin";
import Formulario from "./Formulario";

function App() {
  const [userType, setUserType] = useState(""); // Estado para el tipo de usuario

  // Función para cambiar el tipo de usuario y redirigir
  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  // Función para renderizar el componente adecuado según la selección de userType
  const renderUserComponent = () => {
    switch (userType) {
      case "administrador":
        return <LoginAdmin />;
      case "padreDeFamilia":
        return <Formulario />;
      default:
        return <SistemaEducativo onSelectUserType={handleUserTypeChange} />;
    }
  };

  return (
    <div>
      <h1>Sistema Educativo</h1>
      {renderUserComponent()}
    </div>
  );
}

export default App;
