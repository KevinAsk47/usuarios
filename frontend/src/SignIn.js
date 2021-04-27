import { useState } from "react"
import axios from 'axios'

const SignIn = () => {
    const [usuarioEntrante, setUsuarioEntrante] = useState({mail: '', clave: ''})

    const leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setUsuarioEntrante({
            ...usuarioEntrante,
            [campo]: valor
        })
    }

    const enviar = async e => {
        e.preventDefault()
        const respuesta = await axios.post('http://localhost:4000/api/user/signIn', usuarioEntrante)
        console.log(respuesta)
    }
    return (
        <div className="contenedor formulario">
            <h1>Ingresar a tu cuenta</h1>
            <form>
                <input type="text" placeholder="Ingresa tu mail" name="mail" value={usuarioEntrante.mail} 
                onChange={leerInput} />
                <input type="text" placeholder="Ingresa tu clave" name="clave" value={usuarioEntrante.clave} 
                onChange={leerInput} />
                <button onClick={enviar} >Enviar</button>
            </form>
        </div>

    )
}

export default SignIn