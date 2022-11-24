import { useState } from "react";
import {BaseColaboradores} from '../BaseColaboradores'
import renderLista from "../App"

function Formulario() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    
    function AddColaborador (e){
        e.preventDefault()
        console.log("Hola ")
        if (nombre === "" || correo === "") {
            alert("Todos los campos son obligatorios");
        }
        else {
            const nuevoId = BaseColaboradores.length + 1;
            BaseColaboradores.push({
                id: String(nuevoId),
                nombre: nombre,
                correo: correo,
            });
        }
        setNombre("");
        setCorreo("");
    }


    return (
        <form>
            <input 
            name='nombreColab' 
            type="text" 
            placeholder='Ingresa nombre' 
            onChange={(e) => { setNombre(e.target.value); }} value={nombre}
            />


            <input 
            name='correoColab' 
            type="text" 
            placeholder='Ingresa e-mail' 
            onChange={(e) => { setCorreo(e.target.value); }} value={correo}
            />

            <button onClick={AddColaborador}>Add User</button>

            <div className="lista">{renderLista}</div>
        </form>
    )
}
export default Formulario