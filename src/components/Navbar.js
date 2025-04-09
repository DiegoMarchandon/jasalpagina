/* importamos el componente link desde la librería react router para usarlo 
en lugar de las etiquetas <a> normales cuando queremos navegar 
dentro de nuestra aplicación sin recargar la página */
import { Link } from "react-router-dom";
import './css/Navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre-mi">Sobre mí</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;