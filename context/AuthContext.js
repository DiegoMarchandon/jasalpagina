// importo los react hooks necesarios para manejar el contexto y el estado global:
import { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../lib/db';
// creo el contexto usado para compartir información sobre autenticación en toda la aplicación
const AuthContext = createContext();

/**
 * función que valida el ingreso de usuario con nombre + contraseña
 */
export async function signInNamePass(uspass,usnombre){
    const data = null;
    const error = null;
    // primero buscamos el email asociado al username ingresado
    const {data:userData,error:userError} = await supabase.from('users').select('usmail').eq('username',usnombre).single();
    if(userError || !userData) return userError;
    // segundo, logueamos con el mail obtenido
    const {data:authData,error:authError} =await supabase.auth.signInWithPassword({
        email:userData.usmail,
        password:uspass
    })
    if(authError) return authError;
    // retornamos el usuario y la sesión. Guardando (desestructurando) los valores de las propiedades user y session de authData en otras claves.
    return {data:{user: authData.user, session: authData.session},error};
}

// proveedor de contexto/proveedor de autenticación. 
// "User" almacena información del usuario autenticado.
// "setUser" permite actualizar el estado del usuario.
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // verifica automáticamente si hay un usuario autenticado...
    const checkAuth = async () => {
        // no es necesario ahora el uso de try catch para capturar excepciones inesperadas, porque controlando el flujo con data y error puedo evitarlo, y porque supabase no lanza excepciones por defecto. 
        const { data: { session },error} = await supabase.auth.getSession();
        if(error || !session){
            setUser(null);
        }else{
            setUser(session?.user); 
        }
    };

    useEffect(() => {
        checkAuth(); // ejecución automática al ejecutar el componente
        const { data: listener } = supabase.auth.onAuthStateChange((event,session) => {
            if(event === 'SIGNET_OUT'){
                setUser(null);
            }else if(session?.user){
                setUser(session.user);
            }
        })
        // limpieza del listener al desmontar el componente
        return () => {
            listener?.subscription?.unsubscribe?.();
        }
    }, []);

    // función que permite verificar nuevamente el estado de autenticación cuando un usuario intenta ingresar. Acepta datos opcionales
    const login = async (userFromOutside = null) => {
        if (userFromOutside) {
            setUser(userFromOutside);
        } else {
            await checkAuth();
        }
    };
    // provisión del contexto
    return (
        <AuthContext.Provider value={{ user, setUser, login }}>
            {children} {/* envolvemos la aplicación dentro del authContext.Provider, permitiendo que cualqueir componente acceda a user, serUser y login */} 
        </AuthContext.Provider>
    );
}
// exportamos un hook personalizado useAuth() para que los componentes puedan acceder fácilmente al contexto de autenticación.
export const useAuth = () => useContext(AuthContext);
