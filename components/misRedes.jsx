import styles from './css/MisRedes.module.css';
import Image from 'next/image';

function MisRedes(){
    
    return (
          <div className={styles.redesContainer}>
            <a href="https://www.instagram.com/jasalmusica" target="_blank" rel="noopener noreferrer">
              <Image src='/assets/logoIG.png' alt="Instagram" id="instagram-logo-header" className={styles.redSocialLogo} width={40} height={40} priority={true}/>
            </a>
            <a href="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA" target="_blank" rel="noopener noreferrer">
              <Image src='/assets/logoSpotify.png' alt="Spotify" id="spotify-logo-header" className={styles.redSocialLogo} width={40} height={40} priority={true}/>
            </a>
            <a href="https://www.youtube.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
              <Image src='/assets/logoYT.png' alt="YouTube" id="youtube-logo-header" className={styles.redSocialLogo} width={40} height={40} priority={true}/>
            </a>
            <a href="https://www.tiktok.com/@jasalmusica" target="_blank" rel="noopener noreferrer">
              <Image src='/assets/logoTiktok.png' alt="TikTok" id="tiktok-logo-header" className={styles.redSocialLogo} width={40} height={40} priority={true}/>
            </a>
        </div>
    );
}

export default MisRedes;