import { useEffect, useState } from "react"
import axios from 'axios'
import { connect } from "react-redux"
import authActions from "./authActions"

const SignUp = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({nombre: '', mail: '', clave: '', foto: ''})
    const [errores, setErrores] = useState([])
    const [paises, setPaises] = useState([])

    useEffect(() => {
       fetchear()
    }, [])

    const fetchear = async () => {
        const respuesta = await props.fetchearPaises()
        setPaises(respuesta)
    }

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
        const respuesta = await props.crearUsuario(nuevoUsuario)
        if (respuesta) {
            setErrores(respuesta)
        }

    }
    return (
        <div className="contenedor formulario">
            <h1>Cargar un nuevo usuario</h1>
            {paises.map(pais => <h1>{pais.name}</h1>)}
            <form>
                <input type="text" placeholder="Ingresa tu nombre" name="nombre" value={nuevoUsuario.nombre} 
                onChange={leerInput} />
                <input type="text" placeholder="Ingresa tu mail" name="mail" value={nuevoUsuario.value} 
                onChange={leerInput}/>
                <input type="password" placeholder="Ingresa tu clave" name="clave" value={nuevoUsuario.clave} 
                onChange={leerInput}/>
                <input type="text" placeholder="Ingresa tu foto (URL)" name="foto" value={nuevoUsuario.foto} 
                onChange={leerInput}/>
                <button onClick={enviar}>Enviar</button>
            </form>
            <div>
                {errores.map(error => <h1>{error}</h1>)}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        paises: state.paises
    }
}

const mapDispatchToProps = {
    crearUsuario: authActions.crearUsuario,
    fetchearPaises: authActions.fetchearPaises
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)