import styles from './css/Header.module.css';
import logoIG from "../src/assets/logoIG.png";
import logoSpotify from "../src/assets/logoSpotify.png";
import logoYT from "../src/assets/logoYT.png";
import logoTiktok from "../src/assets/logoTiktok.png";

function Header() {
    return (
      <header className={styles.header-main-container}>
        {console.log(Styles)};
        {/* <img src={JasalFuente} alt="Logo de Jasal" className="logo-artista" /> */}
        {/* <p className="subtitulo">Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p> */}
        <div className={styles.redes-container}>
          <a href="https://www.instagram.com/jasalmusica" target="_blank" rel="noopener noreferrer">
            <img src={logoIG} alt="Instagram" id="instagram-logo-header" className={styles.red-social-logo}/>
          </a>
          <a href="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA" target="_blank" rel="noopener noreferrer">
            <img src={logoSpotify} alt="Spotify" id="spotify-logo-header" className={styles.red-social-logo}/>
          </a>
          <a href="https://www.youtube.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
            <img src={logoYT} alt="YouTube" id="youtube-logo-header" className={styles.red-social-logo}/>
          </a>
          <a href="https://www.tiktok.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
            <img src={logoTiktok} alt="TikTok" id="tiktok-logo-header" className={styles.red-social-logo}/>
          </a>
        </div>
      </header>
    );
}

export default Header;