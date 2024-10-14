import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const manejarCambio = (event) => {
    setNombre(event.target.value);
    console.log(nombre)
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    navigate('/juego', { state: { nombre } }); 
  };

  return (
    <div>
      <h1>Bienvenido al juego</h1>
      <form onSubmit={manejarEnvio}>
        <input type="text"value={nombre} onChange={manejarCambio}placeholder="Ingresa tu nombre"required
        />
        <button type="submit">Comenzar Juego</button>
      </form>
    </div>
  );
}

export default Home;
