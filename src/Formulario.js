import React, { useState } from 'react';
import './App.css'; 


function App() {
  // Variables de estado para los campos del formulario y la generación de turno
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [curp, setCurp] = useState('');
  const [telefono, setTelefono] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [nivel, setNivel] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [asunto, setAsunto] = useState('');
  const [curpError, setCurpError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [celularError, setCelularError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [turnoGenerado, setTurnoGenerado] = useState('');
  const [turnosPorMunicipio, setTurnosPorMunicipio] = useState({});


 
  // Lista de municipios
  const municipios = [
    { value: 'Abasolo', label: 'Abasolo' },
    { value: 'Acuña', label: 'Acuña' },
    { value: 'Allende', label: 'Allende' },
    { value: 'Arteaga', label: 'Arteaga' },
    { value: 'Candela', label: 'Candela' },
    { value: 'Castaños', label: 'Castaños' },
    { value: 'Cuatro Ciénegas', label: 'Cuatro Ciénegas' },
    { value: 'Escobedo', label: 'Escobedo' },
    { value: 'Francisco I. Madero', label: 'Francisco I. Madero' },
    { value: 'Frontera', label: 'Frontera' },
    { value: 'General Cepeda', label: 'General Cepeda' },
    { value: 'Guerrero', label: 'Guerrero' },
    { value: 'Hidalgo', label: 'Hidalgo' },
    { value: 'Jiménez', label: 'Jiménez' },
    { value: 'Juárez', label: 'Juárez' },
    { value: 'Lamadrid', label: 'Lamadrid' },
    { value: 'Matamoros', label: 'Matamoros' },
    { value: 'Monclova', label: 'Monclova' },
    { value: 'Morelos', label: 'Morelos' },
    { value: 'Múzquiz', label: 'Múzquiz' },
    { value: 'Nadadores', label: 'Nadadores' },
    { value: 'Nava', label: 'Nava' },
    { value: 'Ocampo', label: 'Ocampo' },
    { value: 'Parras', label: 'Parras' },
    { value: 'Piedras Negras', label: 'Piedras Negras' },
    { value: 'Progreso', label: 'Progreso' },
    { value: 'Ramos Arizpe', label: 'Ramos Arizpe' },
    { value: 'Sabinas', label: 'Sabinas' },
    { value: 'Sacramento', label: 'Sacramento' },
    { value: 'Saltillo', label: 'Saltillo' },
    { value: 'San Buenaventura', label: 'San Buenaventura' },
    { value: 'San Juan de Sabinas', label: 'San Juan de Sabinas' },
    { value: 'San Pedro', label: 'San Pedro' },
    { value: 'Sierra Mojada', label: 'Sierra Mojada' },
    { value: 'Torreón', label: 'Torreón' },
    { value: 'Viesca', label: 'Viesca' },
    { value: 'Villa Unión', label: 'Villa Unión' },
    { value: 'Zaragoza', label: 'Zaragoza' },
  ];

  // Función para generar un turno único para un municipio
  function generarTurnoUnico(municipioSeleccionado) {
    if (!turnosPorMunicipio[municipioSeleccionado]) {
      turnosPorMunicipio[municipioSeleccionado] = [];
    }

    if (turnosPorMunicipio[municipioSeleccionado].length >= 50) {
      alert("Ya no hay más turnos disponibles para este municipio.");
      return;
    }

    let nuevoTurno = 1;
    while (turnosPorMunicipio[municipioSeleccionado].includes(nuevoTurno) && nuevoTurno <= 50) {
      nuevoTurno++;
    }

    if (nuevoTurno > 50) {
      alert("Ya no hay más turnos disponibles para este municipio.");
      return;
    }

    turnosPorMunicipio[municipioSeleccionado].push(nuevoTurno);
    return `Turno: ${nuevoTurno}`;
  }

  // Función para validar el formulario y generar el turno
  function generarTurno() {
    if (
      !nombreCompleto ||
      !nombre ||
      !apellidoPaterno ||
      !apellidoMaterno ||
      !curp ||
      !telefono ||
      !celular ||
      !email ||
      !nivel ||
      !municipio ||
      !asunto
    ) {
      alert("Por favor, complete todos los campos antes de generar el turno.");
      return;
    }

    // Expresión regular para validar el correo electrónico
    const emailRegex = /(@hotmail\.com|@outlook\.com)$/;

    if (curp.length !== 18) {
      setCurpError("El CURP debe tener 18 caracteres. Ejemplo: HEPP020717MCLRXRA8");
      return;
    } else {
      setCurpError('');
    }

    if (telefono.length !== 10) {
      setTelefonoError("El teléfono debe tener 10 dígitos. Ejemplo: 8443905583");
      return;
    } else {
      setTelefonoError('');
    }

    if (celular.length !== 10) {
      setCelularError("El celular debe tener 10 dígitos. Ejemplo: 8443905583");
      return;
    } else {
      setCelularError('');
    }

    if (!emailRegex.test(email)) {
      setEmailError("Ingrese una dirección de correo electrónico válida, por favor.");
      return;
    } else {
      setEmailError('');
    }

    const turnoGenerado = generarTurnoUnico(municipio);
    setTurnoGenerado(turnoGenerado);
  }

  return (
    <div className="container">
        <img
  src="/descarga.png"
  alt="Mi Imagen"
  width="100" // Cambia el ancho según tus necesidades
  height="100" // Cambia la altura según tus necesidades
/>
      <h2>My Website, Inc</h2>
      <form id="formulario">
        <label htmlFor="textboxNombreCompleto">Nombre Completo del Familiar:</label>
        <input type="text" id="textboxNombreCompleto" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} />
        
        <label htmlFor="textboxNombre">Nombre:</label>
        <input type="text" id="textboxNombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <label htmlFor="textboxPaterno">Apellido Paterno:</label>
        <input type="text" id="textboxPaterno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
        
        <label htmlFor="textboxMaterno">Apellido Materno:</label>
        <input type="text" id="textboxMaterno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
        
        <label htmlFor="textboxCurp">CURP:</label>
        <input type="text" id="textboxCurp" value={curp} onChange={(e) => setCurp(e.target.value)} />
        <span id="curpError" style={{ color: 'red' }}>{curpError}</span>
        
        <label htmlFor="textboxTelefono">Teléfono:</label>
        <input type="text" id="textboxTelefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <span id="telefonoError" style={{ color: 'red' }}>{telefonoError}</span>
        
        <label htmlFor="textboxCelular">Celular:</label>
        <input type="text" id="textboxCelular" value={celular} onChange={(e) => setCelular(e.target.value)} />
        <span id="celularError" style={{ color: 'red' }}>{celularError}</span>
        
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <span id="emailError" style={{ color: 'red' }}>{emailError}</span>
        
        <label htmlFor="nivel">Nivel de Ingreso o Cursando:</label>
        <select id="nivel" value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option value="" disabled selected>Seleccione un nivel</option>
          <option value="Primero">Primero</option>
          <option value="Segundo">Segundo</option>
          <option value="Tercero">Tercero</option>
          <option value="Cuarto">Cuarto</option>
          <option value="Quinto">Quinto</option>
        </select>
        
        <label htmlFor="municipio">Municipio donde desea estudiar:</label>
        <select id="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
          <option value="" disabled selected>Seleccione un municipio</option>
          {municipios.map((municipioOption) => (
            <option key={municipioOption.value} value={municipioOption.value}>
              {municipioOption.label}
            </option>
          ))}
        </select>
        
        <label htmlFor="asunto">Asunto a Tratar:</label>
        <select id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)}>
          <option value="" disabled selected>Seleccione un asunto</option>
          <option value="Baja de Alumno">Baja de Alumno</option>
          <option value="Papelería Pendiente">Papelería Pendiente</option>
          <option value="Ingreso de Alumno">Ingreso de Alumno</option>
          <option value="Materias">Materias</option>
        </select>
        
        <button type="button" id="buttonGenerarTurno" onClick={generarTurno}>Generar Turno</button>
      </form>
      <div id="resultadoTurno" style={{ display: turnoGenerado ? 'block' : 'none', marginTop: '20px' }}>
        <h3>Turno Generado:</h3>
        <p id="turnoGenerado">{turnoGenerado}</p>
      </div>
      
    </div>
  );
}

export default App;
