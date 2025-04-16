import { Link } from "react-router-dom";
import JasalFuente from "../assets/JasalFuente.png"; 
import './css/Header.css';

function Header(){
    return (
      <header className="header-artista">
        {/* <h1 className="titulo-principal">Jasal</h1> */}
        <img src="" alt="foto principal" />
        <img src={JasalFuente} alt="Logo de Jasal" className="logo-artista" />
        <p className="subtitulo">Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
      </header>
    )
}

export default Header;