import { useState } from "react"
import axios from 'axios'
import { connect } from "react-redux"
import authActions from "./authActions"

const SignIn = (props) => {
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
        props.loguearUsuario(usuarioEntrante)
    }
    return (
        <div className="contenedor formulario">
            <h1>Ingresar a tu cuenta</h1>
            <form>
                <input type="text" placeholder="Ingresa tu mail" name="mail" value={usuarioEntrante.mail} 
                onChange={leerInput} />
                <input type="password" placeholder="Ingresa tu clave" name="clave" value={usuarioEntrante.clave} 
                onChange={leerInput} />
                <button onClick={enviar} >Enviar</button>
            </form>
        </div>

    )
}

const mapDispatchToProps = {
    loguearUsuario: authActions.loguearUsuario
}

export default connect(null, mapDispatchToProps)(SignIn) 