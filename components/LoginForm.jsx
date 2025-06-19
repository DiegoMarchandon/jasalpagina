import styles from '../styles/Ingreso.module.css';

function LoginForm({uspass,usnombre,handleChange,handleSubmit, error}){


    return (
        <form onSubmit={handleSubmit} className={styles.sesionForm}>
                            {error && <p className={styles.error}>{error}</p>}
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
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className={styles.passwordInput}
                                name="uspass"
                                value={uspass}
                                placeholder='contraseña'
                                onChange={handleChange}
                                autoComplete='current-password'
                                required
                            />
                        </div>
                        <button type="submit" className={styles.passwordInput}>Register</button>
                    </form>
    );
}
export default LoginForm;