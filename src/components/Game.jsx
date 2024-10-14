import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Game() {
  const location = useLocation();
  const { nombre } = location.state || {}; // Obtener el nombre del estado

  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const [intento, setIntento] = useState('');
  const [historial, setHistorial] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [adivinado, setAdivinado] = useState(false);

  useEffect(() => {
    const nuevoNumero = Math.floor(Math.random() * 100) + 1;
    setNumeroAleatorio(nuevoNumero);
  }, []);

  const manejarIntento = (event) => {
    setIntento(event.target.value);
  };

  const enviarIntento = (event) => {
    event.preventDefault();

    const numeroIntento = parseInt(intento, 10);
    if (numeroIntento < 1 || numeroIntento > 100) {
      setMensaje('Por favor, ingresa un número entre 1 y 100.');
      return;
    }

    setHistorial([...historial, numeroIntento]);

    if (numeroIntento === numeroAleatorio) {
      setMensaje(`¡Correcto! El número era ${numeroAleatorio}.`);
      setAdivinado(true);
    } else if (numeroIntento < numeroAleatorio) {
      setMensaje('Demasiado bajo. Intenta de nuevo.');
    } else {
      setMensaje('Demasiado alto. Intenta de nuevo.');
    }

    setIntento('');
  };

  return (
    <div className="juego-container">
      <h1>Pantalla del Juego</h1>
      {nombre && <h2>¡Hola, {nombre}! ¡Buena suerte!</h2>} 
      <div className="numero-oculto">
        {adivinado ? numeroAleatorio : '?'}
      </div>
      <form onSubmit={enviarIntento}>
        <input 
          type="number" 
          value={intento} 
          onChange={manejarIntento} 
          placeholder="Ingresa tu adivinanza" 
        />
        <button type="submit">Adivinar</button>
      </form>
      <p>{mensaje}</p>
      <div>
        <h3>Historial de intentos:</h3>
        <ul>
          {historial.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
