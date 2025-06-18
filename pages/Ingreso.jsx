import React, { useState } from 'react';
import { Router } from 'next/router';
import styles from '../styles/Ingreso.module.css';
import { useAuth } from '../context/AuthContext';
import RegistroForm from '../components/RegistroForm';
import LoginForm from '../components/LoginForm';
const Ingreso = () => {

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
        if(color === 'registro'){
            if(formData.uspass !== formData.passwordConfirm){
                alert('las contraseñas no coinciden');
                return;
            }
            try{
                const response = await fetch('./api/requests/usuario',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer token'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                // console.log('Respuesta del servidor: ',data);
                if(!response.ok) throw new Error(data.error || 'Error en registro');
                console.log('usuario registrado: ',data);
                setError('');

                await login(); // actualiza el contexto global con el user
                Router.push('/'); //redirigimos
            }catch(err){
                console.error('Error al registrar: ',err.message);
                setError(err.message);
            }
        } else if (color === 'sesion') {
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                const data = await response.json();
                if (!response.ok){
                    setError(data.error || 'Error en login');
                    return;
                } 
                console.log('Usuario autenticado:', data);
                
                await login(); //actualizo el contexto antes de redirigir

                setError(''); //limpio errores si login fue exitoso
                // redirigir
            } catch (err) {
                setError()
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
                            usmail={formData.usmail}
                            usnombre={formData.uspass}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Ingreso;