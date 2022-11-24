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
        <h2 className='h2-buscador'>Buscador de colaboradores</h2>
        <input 
            className='input-buscador' 
            type="text" 
            placeholder='Ingrese nombre a buscar' 
            onChange={(e) => { setBusqueda(e.target.value); console.log(busqueda)}} value={busqueda}
          />

      </div>
      <form>
          <label for="formulario-nombre"><b>Nombre del colaborador</b></label>
          <input
            name='formulario-nombre'
            type="text" 
            placeholder='Ingresa nombre' 
            onChange={(e) => { setNombre(e.target.value); }} value={nombre}
          />

          <label for="formulario-correo"><b>Correo del colaborador</b></label>
          <input 
            name='formulario-correo' 
            type="text" 
            placeholder='Ingresa e-mail' 
            onChange={(e) => { setCorreo(e.target.value); }} value={correo}
          />
          
          <div className='boton-formulario'>
            <button onClick={agragandoColaborador}>Agregar</button>
          </div>

          <h3>Listado de colaboradores:</h3>
          <div className='lista'>
            {listaColaboradores.map(colab => <li key={colab.id}>
                <div className='info-colaborador'>  
                  <b>Nombre: </b>{colab.nombre}
                </div>
                <div className='info-colaborador'>
                  <b>Id: </b>{colab.id}
                </div>
                <div className='info-colaborador'>
                <b>Correo: </b>{colab.correo}
                </div>
              </li>)}
          </div>
      </form>
    </main>
  );
}

export default App;
