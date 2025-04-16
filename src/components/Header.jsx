import { Link } from "react-router-dom";
import JasalFuente from "../assets/JasalFuente.png"; 
import JasalHeaderIMG from '../assets/1742315860763.jpg';
import './css/Header.css';

function Header(){
    return (
      <header className="header-artista">
        <img src={JasalFuente} alt="Logo de Jasal" className="logo-artista" />
        <p className="subtitulo">Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
      </header>
    )
}

export default Header;