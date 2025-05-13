import React, { useState } from 'react';
import styles from '../styles/Ingreso.module.css';

const Ingreso = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [color,setColor] = useState('registro');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
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
            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className={styles.usernameInput}
                        name="username"
                        value={formData.username}
                        placeholder='nombre de usuario'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className={styles.emailInput}
                        name="email"
                        value={formData.email}
                        placeholder='correo electrónico'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className={styles.passwordInput}
                        name="password"
                        value={formData.password}
                        placeholder='contraseña'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="passwordConfirm">Password Confirm:</label>
                    <input
                        type="password"
                        className={styles.passwordInput}
                        name="passwordConfirm"
                        value={formData.password}
                        placeholder='confirme su contraseña'
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.passwordInput}>Register</button>
            </form>
        </div>
        </div>
    );
};

export default Ingreso;