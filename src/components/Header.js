import { Link } from "react-router-dom";
import './css/Header.css';

function Header(){
    return (
        <header className="site-header">
      <div className="header-content">
        <h1>Bienvenido a JasAl Música</h1>
        <p>Producción musical, creatividad y pasión en cada nota.</p>
        <a href="#contacto" className="header-btn">Contáctame</a>
      </div>
    </header>
    )
}

export default Header;