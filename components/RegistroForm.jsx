import styles from '../styles/Inicio.module.css';
import supabase from '../lib/db';

function RegistroForm({usmail,usnombre,uspass,passwordConfirm,handleChange,handleSubmit}){

    // const {data,error} = await supabase.auth.signInWithPassword({

    
    return (
        <form onSubmit={handleSubmit} className={styles.registerForm}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className={styles.usernameInput}
                    name="usnombre"
                    value={usnombre}
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
                    value={usmail}
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
                    value={uspass}
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
                    value={passwordConfirm}
                    placeholder='confirme su contraseña'
                    onChange={handleChange}
                    autoComplete='new-password'
                    required
                />
            </div>
            <button type="submit" className={styles.passwordInput}>Register</button>
        </form>
    );
}

export default RegistroForm;