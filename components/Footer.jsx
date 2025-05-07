import { Youtube, Instagram, Music2, Waves } from 'lucide-react';

import styles from './css/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer-content}>
                <p>&copy; {new Date().getFullYear()} Jasal. Todos los derechos reservados.</p>
                <div className={styles.social-icons}>
                    <div>
                        <li><a href="https://www.youtube.com/@jasalmusica" target="_blank" rel="noopener noreferrer"><Youtube color="red"/></a></li>
                    </div>
                    <div>
                        <li><a href="https://www.instagram.com/jasalmusica/" target="_blank" rel="noopener noreferrer"><Instagram color="violet"/></a></li>
                    </div>
                    <div>
                        <li><a href="https://www.tiktok.com/@jasalmusica" target="_blank" rel="noopener noreferrer"><Music2 color="purple"/></a></li>
                    </div>
                    <div>
                        <li><a href="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA" target="_blank" rel="noopener noreferrer"><Waves color="green"/></a></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;