import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ShoppingCart } from 'lucide-react';
import styles from './css/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 100); // Cambia el estado si el scroll es mayor a 100px
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll); // Limpieza
        }
    }, []);

    // Verificar si hay sesión activa
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/user', {
                    methos: 'GET',
                    credentials: 'include' 
                });
                const data = await res.json();
                setAuthenticated(data.authenticated);
            } catch (err) {
                setAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST'
            });
            if (res.ok) {
                setAuthenticated(false);
                router.push('/Ingreso');
            }
        } catch (err) {
            console.error('Error al cerrar sesión:', err);
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.sticky : ''}`}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/SobreMi">Sobre mí</Link></li>
                <li><Link href="/Mercaderia">Mercadería</Link></li>
                <li><Link href="/Blog">Blog</Link></li>
                <li><Link href="/Galeria">Galería</Link></li>
                <li><Link href="/Carrito" className="carritoLogo"><ShoppingCart /></Link></li>
                {
                    authenticated ? (
                        <li><button onClick={handleLogout} className={styles.logoutButton}>Cerrar sesión</button></li>
                    ) : (
                        <li><Link href="/Ingreso">Ingreso</Link></li>
                    )
                }
            </ul>
        </nav>
    );
}

// export default Navbar;