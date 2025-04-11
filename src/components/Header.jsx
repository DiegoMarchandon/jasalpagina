import { Link } from "react-router-dom";
import './css/Header.css';

function Header(){
    return (
      <header className="header-artista">
        <h1 className="titulo-principal">Jasal</h1>
        <p className="subtitulo">Música con alma y corazón</p>
      </header>
    )
}

export default Header;