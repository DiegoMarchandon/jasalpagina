import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ShoppingCart } from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import styles from './css/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    /* const [authenticated, setAuthenticated] = useState(false); */
    const router = useRouter();
    const { user, setUser } = useAuth();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 100); // Cambia el estado si el scroll es mayor a 100px
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll); // Limpieza
        }
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (res.ok) {
                // setAuthenticated(false);
                setUser(null); // limpiamos el contexto
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

                   user ? (
                        <li>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                Cerrar sesión
                            </button>
                        </li>
                    ) : (
                        <li><Link href="/Ingreso">Ingreso</Link></li>
                    )
                }
            </ul>
        </nav>
    );
}

// export default Navbar;