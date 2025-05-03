import { Link } from "react-router-dom";
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Music2 } from 'lucide-react';
import { Waves } from 'lucide-react';

import './css/Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Jasal. Todos los derechos reservados.</p>
                <div className="social-icons">
                    <div>
                        <li><Link to="https://www.youtube.com/@jasalmusica"><Youtube color="red"/></Link></li>
                    </div>
                    <div>
                        <li><Link to="https://www.instagram.com/jasalmusica/"><Instagram color="violet"/></Link></li>
                    </div>
                    <div>
                        <li><Link to="https://www.tiktok.com/@jasalmusica"><Music2 color="purple"/></Link></li>
                    </div>
                    <div>
                        <li><Link to="https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7?si=WLIntwg4RJusMNpDTMVBVA"><Waves color="green"/></Link></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;