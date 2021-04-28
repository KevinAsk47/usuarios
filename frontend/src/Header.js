import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import authActions from './authActions'

const Header = (props) => {
   
    const persona = props.userLogged ? props.userLogged.nombre : 'NN'
    const fotoUser = props.userLogged 
    ? props.userLogged.foto
    : 'https://img2.freepng.es/20181118/uxu/kisspng-clip-art-image-generic-drug-social-media-photograp-male-svg-png-icon-free-download-5-6821-online-5bf22649c9d890.4957056815425961698268.jpg'
    return (
        <header>
            <div className="userLinks">
                <div className="fotito" style={{
                    backgroundImage: `url('${fotoUser}')`
                }}></div>
                <h3>Bienvenido, {persona}</h3>
                {!props.userLogged && (
                    <>
                    <NavLink to="/signup" className="links"><h3>Sign Up</h3></NavLink>
                    <NavLink to="/signin" className="links"><h3>Sign In</h3></NavLink>
                    </>
                 )} 
                {props.userLogged && 
                <h3 className="links" onClick={props.desloguearUsuario}>Sign Out</h3>
                 } 
            </div>
            <nav>
                <NavLink to="/" className="links">Bienvenida</NavLink>
                {props.userLogged && 
                <NavLink to="/logueados" className="links">Logueados</NavLink>
                 } 
                {(props.userLogged && props.userLogged.admin) && 
                <NavLink to="/admins" className="links">Admins</NavLink>
                 } 
            </nav>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.userLogged
    }
}

const mapDispatchToProps = {
    desloguearUsuario: authActions.desloguearUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)