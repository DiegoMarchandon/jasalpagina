// importo los react hooks necesarios para manejar el contexto y el estado global:
import { createContext, useContext, useState, useEffect } from 'react';
// creo el contexto usado para compartir información sobre autenticación en toda la aplicación
const AuthContext = createContext();

// proveedor de contexto/proveedor de autenticación. 
// "User" almacena información del usuario autenticado.
// "setUser" permite actualizar el estado del usuario.
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // verifica automáticamente si hay un usuario autenticado...
    const checkAuth = async () => {
        try {
            // ... haciendo una solicitud GET al endpoint de user.
            const res = await fetch('/api/auth/user', {
                method: 'GET',
                credentials: 'include' //parámetros para solicitar información del usuario al servidor.
            });
            const data = await res.json();
            if (data.authenticated) { //si la respuesta indica que el usuario está autenticado, se actualiza el estado user.
                setUser(data.user);
            } else {
                setUser(null); //solicitud fallida --> usuario null
            }
        } catch {
            setUser(null);
        }
    };

    useEffect(() => {
        checkAuth(); // ejecución automática al ejecutar el componente
    }, []);

    // función que permite verificar nuevamente el estado de autenticación cuando un usuario intenta ingresar.
    const login = async () => {
        await checkAuth();
    } 
    // provisión del contexto
    return (
        <AuthContext.Provider value={{ user, setUser, login }}>
            {children} {/* envolvemos la aplicación dentro del authContext.Provider, permitiendo que cualqueir componente acceda a user, serUser y login */} 
        </AuthContext.Provider>
    );
}
// exportamos un hook personalizado useAuth() para que los componentes puedan acceder fácilmente al contexto de autenticación.
export const useAuth = () => useContext(AuthContext);
