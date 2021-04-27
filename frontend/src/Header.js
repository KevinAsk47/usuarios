import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="userLinks">
                <img src="https://img2.freepng.es/20181118/uxu/kisspng-clip-art-image-generic-drug-social-media-photograp-male-svg-png-icon-free-download-5-6821-online-5bf22649c9d890.4957056815425961698268.jpg" alt=""/>
                <NavLink to="/signup" className="links">Sign Up</NavLink>
                <NavLink to="/signin" className="links">Sign In</NavLink>
            </div>
            <nav>
                <NavLink to="/" className="links">Bienvenida</NavLink>
                <NavLink to="/logueados" className="links">Logueados</NavLink>
                <NavLink to="/admins" className="links">Admins</NavLink>
            </nav>
        </header>
    )
}

export default Header