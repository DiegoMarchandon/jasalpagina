// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Al cargar, verificar si hay un usuario autenticado
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/user');
                const data = await res.json();
                if (data.authenticated) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch {
                setUser(null);
            }
        };
        checkAuth();
    }, []);

    // función para login que puedo usar en mi componente de ingreso
    const login = async () => {
        await checkAuth();
    } 

    return (
        <AuthContext.Provider value={{ user, setUser, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
