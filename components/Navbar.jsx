import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import styles from './css/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 100); // Cambia el estado si el scroll es mayor a 100px
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll); // Limpieza
        }
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.sticky : ''}`}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/SobreMi">Sobre mí</Link></li>
                <li><Link href="/Mercaderia">Mercadería</Link></li>
                <li><Link href="/Blog">Blog</Link></li>
                <li><Link href="/Galeria">Galería</Link></li>
                <li><Link href="/Carrito" className="carritoLogo"><ShoppingCart /></Link></li>
            </ul>
        </nav>
    );
}

// export default Navbar;