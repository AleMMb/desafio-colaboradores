import './App.css';
import {BaseColaboradores} from './BaseColaboradores'
import { useState } from 'react';



function App() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [colaborador, setColaborador] = useState(BaseColaboradores)
  const [busqueda, setBusqueda] = useState('')

  const agragandoColaborador = (e) => {
    e.preventDefault();
    setColaborador([...colaborador, { "id": colaborador.length + 1, "nombre": nombre, "correo": correo}])
    console.log(colaborador)
    setNombre("")
    setCorreo("")
  }

  const listaColaboradores = !busqueda ? colaborador : colaborador.filter((x) => x.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

  return (
    <main>
      <div className='buscador'>
        <h3>Buscador de colaboradores</h3>
        <input 
            name='input-buscador' 
            type="text" 
            placeholder='Busca un colaborador' 
            onChange={(e) => { setBusqueda(e.target.value); console.log(busqueda)}} value={busqueda}
          />

      </div>
      <form className='formulario'>
            <input 
            name='nombre-formulario' 
            type="text" 
            placeholder='Ingresa nombre' 
            onChange={(e) => { setNombre(e.target.value); }} value={nombre}
            />


            <input 
            name='correo-formulario' 
            type="text" 
            placeholder='Ingresa e-mail' 
            onChange={(e) => { setCorreo(e.target.value); }} value={correo}
            />

            <button onClick={agragandoColaborador}>Agregar</button>

            <div className='lista'>
              {listaColaboradores.map( colab => <li key={colab.id}>Nombre: {colab.nombre}correo: {colab.correo} ID: {colab.id}</li>)}
            </div>
        </form>
    </main>
  );
}

export default App;
