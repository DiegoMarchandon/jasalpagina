// importo los react hooks necesarios para manejar el contexto y el estado global:
import { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../lib/db';
// creo el contexto usado para compartir información sobre autenticación en toda la aplicación
const AuthContext = createContext();

/**
 * función que valida el ingreso de usuario con nombre + contraseña
 */
export async function signInNamePass(uspass,usnombre){
    try{

        // primero buscamos el email asociado al username ingresado
        const {data:userData,error:userError} = await supabase.from('usuario').select('usmail').eq('usnombre',usnombre).single();
        if(userError || !userData) return { error: userError || new Error('Usuario no encontrado') };
        // segundo, logueamos con el mail obtenido
        const {data:authData,error:authError} =await supabase.auth.signInWithPassword({
            email:userData.usmail,
            password:uspass
        });
        if(authError) return { error: new Error(authError.message || 'Credenciales inválidas') };
        // retornamos el usuario y la sesión. Guardando (desestructurando) los valores de las propiedades user y session de authData en otras claves.
        return {data:{user: authData.user, session: authData.session},error:null};
    }catch(err){
        return { error: new Error('Ocurrió un error inesperado. Por favor, intenta nuevamente.')}
    }
}

/**
 * función qe valida el registro de un usuario
 */
export const handleRegister = async (formData) => {
    const { usmail: email, uspass: password, usnombre: username } = formData;

    try {
        // Registra al usuario en 'auth.users'
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if(authError) return { error: new Error(authError.message || 'Credenciales inválidas') };

        console.log('Usuario registrado en auth.users:', authData);

        // Registra al usuario en 'public.usuario'
        const { data: usuarioData, error: usuarioError } = await supabase
            .from('usuario')
            .insert([{ usmail: email, usnombre: username, uspass: password, ushabilitado: true, usuariorol: "usuario" }]);

            if(usuarioError) return { error: new Error(/* usuarioError.message ||  */'datos de registro inválidos') };

        console.log('Usuario registrado en public.usuario:', usuarioData);

    } catch (err) {
        console.error('Error inesperado:', err.message);
        setError('Ocurrió un error inesperado. Por favor, intenta nuevamente.');
    }
};


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
            setUser(userFromOutside); //actualizo el estado con el usuario proporcionado
        } else {
            // await checkAuth();
            const { data: { session }, error } = await supabase.auth.getSession(); // Obtén la sesión actual
            if (error || !session) {
                setUser(null); // Limpia el estado si no hay sesión
            } else {
                setUser(session.user); // Actualiza el estado con el usuario autenticado
            }
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
