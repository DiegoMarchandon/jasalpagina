import styles from './css/Header.module.css';
import Image from 'next/image';
import logoIG from '../src/assets/logoIG.png';
import logoSpotify from '../src/assets/logoSpotify.png';
import logoYT from '../src/assets/logoYT.png';
import logoTiktok from '../src/assets/logoTiktok.png';

function Header() {
    return (
      <header className={styles.headerMasterContainer}>
        <div className={styles.redesContainer}>
          <a href="https://www.instagram.com/jasalmusica" target="_blank" rel="noopener noreferrer">
            <Image src={logoIG} alt="Instagram" id="instagram-logo-header" className={styles.redSocialLogo} width={40} height={40} />
          </a>
          <a href="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA" target="_blank" rel="noopener noreferrer">
            <Image src={logoSpotify} alt="Spotify" id="spotify-logo-header" className={styles.redSocialLogo} width={40} height={40} />
          </a>
          <a href="https://www.youtube.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
            <Image src={logoYT} alt="YouTube" id="youtube-logo-header" className={styles.redSocialLogo} width={40} height={40} />
          </a>
          <a href="https://www.tiktok.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
            <Image src={logoTiktok} alt="TikTok" id="tiktok-logo-header" className={styles.redSocialLogo} width={40} height={40} />
          </a>
        </div>
      </header>
    );
}
