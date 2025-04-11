import { Link } from "react-router-dom";
import './css/Header.css';

function Header(){
    return (
        <header className="site-header">
      <div className="header-content">
        <h1>Bienvenido a mi página</h1>
        <p>Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
        <a href="#contacto" className="header-btn">Contáctame</a>
      </div>
      {/* <h1>header de prueba</h1> */}
    </header>
    )
}

export default Header;