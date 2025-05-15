import React, { useState } from 'react';
import styles from '../styles/Ingreso.module.css';
import { useAuth } from '../context/AuthContext';

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
                console.error('Error al registrar: ',err);
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
                <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className={styles.usernameInput}
                            name="usnombre"
                            value={formData.usnombre}
                            placeholder='nombre de usuario'
                            onChange={handleChange}
                            autoComplete='username'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className={styles.emailInput}
                            name="usmail"
                            value={formData.usmail}
                            placeholder='correo electrónico'
                            onChange={handleChange}
                            autoComplete='email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className={styles.passwordInput}
                            name="uspass"
                            value={formData.uspass}
                            placeholder='contraseña'
                            onChange={handleChange}
                            autoComplete='new-password'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Password Confirm:</label>
                        <input
                            type="password"
                            className={styles.passwordInput}
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            placeholder='confirme su contraseña'
                            onChange={handleChange}
                            autoComplete='new-password'
                            required
                        />
                    </div>
                    <button type="submit" className={styles.passwordInput}>Register</button>
                </form>
                ) : (
                    color === 'sesion' &&
                    <form onSubmit={handleSubmit} className={styles.sesionForm}>
                         {error && <p className={styles.error}>{error}</p>}
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className={styles.usernameInput}
                            name="usnombre"
                            value={formData.usnombre}
                            placeholder='nombre de usuario'
                            onChange={handleChange}
                            autoComplete='username'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className={styles.passwordInput}
                            name="uspass"
                            value={formData.uspass}
                            placeholder='contraseña'
                            onChange={handleChange}
                            autoComplete='current-password'
                            required
                        />
                    </div>
                    <button type="submit" className={styles.passwordInput}>Register</button>
                </form>
                )
            }
        </div>
        </div>
    );
};

export default Ingreso;