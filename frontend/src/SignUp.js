import { useState } from "react"
import axios from 'axios'

const SignUp = () => {
    const [nuevoUsuario, setNuevoUsuario] = useState({nombre: '', mail: '', clave: ''})

    const leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: valor
        })
    }

    const enviar = async e => {
        e.preventDefault()
        const respuesta = await axios.post('http://localhost:4000/api/user/signUp', nuevoUsuario)
        console.log(respuesta)
    }
    return (
        <div className="contenedor formulario">
            <h1>Cargar un nuevo usuario</h1>
            <form>
                    <input type="text" placeholder="Ingresa tu nombre" name="nombre" value={nuevoUsuario.nombre} 
                    onChange={leerInput} />
                <input type="text" placeholder="Ingresa tu mail" name="mail" value={nuevoUsuario.value} 
                onChange={leerInput}/>
                <input type="password" placeholder="Ingresa tu clave" name="clave" value={nuevoUsuario.clave} 
                onChange={leerInput}/>
                <button onClick={enviar}>Enviar</button>
            </form>
        </div>

    )
}

export default SignUp