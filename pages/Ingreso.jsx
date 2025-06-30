import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Ingreso.module.css';
import { useAuth, signInNamePass, handleRegister } from '../context/AuthContext';
import RegistroForm from '../components/RegistroForm';
import LoginForm from '../components/LoginForm';
// import createClient from '@supabase/supabase-js';
// import supabase from '../lib/db';
const Ingreso = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        usnombre: '',
        usmail: '',
        uspass: '',
        passwordConfirm: ''
    });
    const [color,setColor] = useState('registro');
    const [error, setError] = useState('');
    const {login} = useAuth();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // destructuring + alias:
        const {usmail:email, uspass:password} = formData;
        var bandera = true;
        if(color === 'registro'){
            if(formData.uspass !== formData.passwordConfirm){
                setError('Las contraseñas no coinciden');
                bandera = false;
            }
            // verificando que email y pass no estén vacíos:
            
            if(formData.usmail === '' || formData.uspass === ''){
                setError('Hay campos incompletos');
                bandera = false;  
            } 
            if(!bandera) return;

            try{

                await handleRegister(formData); 

                console.log("datos:",formData);
                if(error){
                    setError(error.message || 'Error inesperado');
                    return;
                } 
                router.push('/'); //redirigimos
            }catch(err){
                console.error('Error al registrar: ',err.message);
                setError(err.message);
            }
        } else if (color === 'sesion') {
            try {
                
                const {data,error} = await signInNamePass(formData.uspass,formData.usnombre);
                if(error){
                    setError(error.message || 'Error inesperado');
                    return;
                }
                await login(data);  
                router.push('/'); //redirigimos
                setError(''); //limpio errores si login fue exitoso
                // redirigir
            } catch (err) {
                setError(err.message);
                console.error('Error al iniciar sesión:', err);
            }
        }
    };

    const changeSection = (param) => {
        setColor(param);
    }
    return (
        <div className={styles.mainIngresoContainer}>
            <div className={styles.ingresoContainer}>
                <div className={styles.formOptions}>
                    <h2 onClick={() => changeSection('registro')} className={color==='registro' ? styles.active : styles.inactive}>Registrarse</h2> 
                    <span>|</span>   
                    <h2 onClick={() => changeSection('sesion')} className={color==='sesion' ? styles.active : styles.inactive}>Iniciar sesión</h2>
                </div>
                {
                    color==='registro' ? (
                        <RegistroForm
                            usmail={formData.usmail}
                            usnombre={formData.usnombre}
                            uspass={formData.uspass}
                            passwordConfirm={formData.passwordConfirm}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    ) : (
                        color === 'sesion' &&
                        <LoginForm
                            uspass={formData.uspass}
                            usnombre={formData.usnombre}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            error={error}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Ingreso;