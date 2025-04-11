import { Link } from "react-router-dom";
import InstagramLogo from "../assets/instagramLogo.png";
import TikTokLogo from "../assets/tik-tokLogo.png";
import SpotifyLogo from "../assets/spotifyLogo.png";
import YoutubeLogo from "../assets/youtubeLogo.png";

import './css/Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Jasal. Todos los derechos reservados.</p>
                <div className="social-icons">
                    <div>
                        <li><Link to="www.youtube.com/@jasalmusica">Youtube</Link></li>
                        <img src={YoutubeLogo} alt="youtube logo" className="icon-container"/>
                    </div>
                    <div>
                        <li><Link to="https://www.instagram.com/jasalmusica/">Instagram</Link></li>
                        <img src={InstagramLogo} alt="instagram logo" className="icon-container"/>
                    </div>
                    <div>
                        <li><Link to="https://www.tiktok.com/@jasalmusica">tik tok</Link></li>
                        <img src={TikTokLogo} alt="tik tok logo" className="icon-container"/>
                    </div>
                    <div>
                        <li><Link to="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA">Spotify</Link></li>
                        <img src={SpotifyLogo} alt="spotify logo" className="icon-container"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;