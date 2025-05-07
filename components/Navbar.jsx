import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import styles from './css/Navbar.module.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.sticky : ''}`}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/sobre-mi">Sobre mí</Link></li>
                <li><Link href="/mercaderia">Mercadería</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/galeria">Galería</Link></li>
                <li><Link href="/carrito" className="carrito-logo"><ShoppingCart /></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;