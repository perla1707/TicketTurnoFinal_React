import React, { useState } from 'react';
import Formulario from './Formulario'; // Importa el componente Formulario

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Cambiar el estado para mostrar el componente Formulario
      setLoggedIn(true);
    } else {
      // Muestra una alerta de contraseña incorrecta si el inicio de sesión falla
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="container">
      
      {loggedIn ? (
        <Formulario />
      ) : (
        <div>
          <label htmlFor="textAdmin">Usuario de Administrador:</label><br />
          <input
            type="text"
            id="textAdmin"
            name="textAdmin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br />
          <label htmlFor="textContraseña">Contraseña:</label><br />
          <input
            type="password"
            id="textContraseña"
            name="textContraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button onClick={handleLogin}>Ingresar</button>
        </div>
      )}
    </div>
  );
}

export default App;
