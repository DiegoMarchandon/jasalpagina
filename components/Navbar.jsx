import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ShoppingCart, Menu } from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import styles from './css/Navbar.module.css';
import supabase from '../lib/db';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    /* const [authenticated, setAuthenticated] = useState(false); */
    const router = useRouter();
    const { user, setUser } = useAuth(); // Accede al usuario autenticado y la función para actualizar el estado
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
        await supabase.auth.signOut(); //cerramos sesión en supabase
        setUser(null); //limpiamos el estado del usuario en el contexto
    }

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.sticky : ''}`}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/SobreMi">Sobre mí</Link></li>
                <li><Link href="/Mercaderia">Mercadería</Link></li>
                <li><Link href="/Blog">Blog</Link></li>
                <li><Link href="/Galeria">Galería</Link></li>
                <li><Link href="/Panel">Panel</Link></li>
                <li><Link href="/Carrito" className="carritoLogo"><ShoppingCart /></Link></li>
                {

                   user ? (
                        <li>
                            <p>Bienvenido, {user.user_metadata?.usnombre}</p>
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