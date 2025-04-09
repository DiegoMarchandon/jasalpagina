import { Link } from "react-router-dom";
import './css/Footer.css';

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} JasAl Música. Todos los derechos reservados.</p>
                <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="mailto:contacto@jasalmusica.cl">Correo</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;