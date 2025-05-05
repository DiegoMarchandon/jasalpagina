import { Link } from "react-router-dom";
// import JasalFuente from "../assets/JasalFuente.png"; 
import logoIG from "../assets/logoIG.png";
import logoSpotify from "../assets/logoSpotify.png";
import logoYT from "../assets/logoYT.png";
import logoTiktok from "../assets/logoTiktok.png";
import './css/Header.css';

function Header(){
    return (
      <header className="header-main-container">
        {/* <img src={JasalFuente} alt="Logo de Jasal" className="logo-artista" /> */}
        {/* <p className="subtitulo">Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p> */}
        <div className="redes-container">
        
        <Link to="https://www.instagram.com/jasalmusica/"><img src={logoIG} alt="red social" id="instagram-logo-header" className="red-social-logo"/></Link>
        <Link to="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA"><img src={logoSpotify} alt="red social" id="spotify-logo-header" className="red-social-logo"/></Link>
        <Link to="https://www.youtube.com/@jasalmusica"><img src={logoYT} alt="red social" id="youtube-logo-header" className="red-social-logo"/></Link>
          <Link to="https://www.tiktok.com/@jasalmusica"><img src={logoTiktok} alt="red social" id="tiktok-logo-header" className="red-social-logo"/></Link>
        </div>
      </header>
    )
}

export default Header;