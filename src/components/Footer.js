import { Link } from "react-router-dom";
import './css/Footer.css';

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} JasAl Música. Todos los derechos reservados.</p>
                <div className="social-icons">
                <li><Link to="https://facebook.com">Facebook</Link></li>
                <li><Link to="https://instagram.com">Instagram</Link></li>
                <li><Link to="mailto:contacto@jasalmusica.cl">Correo</Link></li>
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
                {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
                {/* <a href="mailto:contacto@jasalmusica.cl">Correo</a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;