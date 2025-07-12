import styles from './css/FormContacto.module.css';
import emailjs from 'emailjs-com';


function FormContacto(){
        const enviarCorreo = (e) => {
          e.preventDefault(); // Evita que el formulario recargue la página
      
          emailjs.sendForm(
            'service_bcywwkl',       // Reemplaza con tu ID de servicio
            'template_bn19443',      // Reemplaza con tu ID de plantilla
            e.target,              // Referencia al formulario
            'pOdgxOoMcxHiMoD2x'        // Reemplaza con tu clave pública (API key)
          )
          .then((result) => {
            alert('Mensaje enviado correctamente.');
            e.target.reset() //limpia los campos del formulario
          }, (error) => {
            alert('Hubo un problema al enviar el mensaje: ' + error.text);
          });
        };

    return (

        <div className={styles.formContainer}>
          <div className={styles.formInner}>
           <form onSubmit={enviarCorreo} className={styles.contactForm}>
                <h2>Contacto</h2>
                {/* <hr className={styles.contactLine}/> */}
                {/* <label htmlFor="nombre">Nombre:</label> */}
                <input className={styles.contactInput} type="text" name="nombre" id="nombre" placeholder='Nombre' required />

                {/* <label htmlFor="email">Email:</label> */}
                <input className={styles.contactInput} type="email" name="email" id="email" placeholder='Email' required />
                {/* <label htmlFor="asunto">Asunto:</label> */}
                <input className={styles.contactInput} type="asunto" name="asunto" id="asunto" placeholder='Asunto' required />
                {/* <label htmlFor="mensaje">Mensaje:</label> */}
                <textarea className={styles.contactTextarea} name="mensaje" id="mensaje" placeholder='Mensaje' required rows={5} cols={30}></textarea>

                <button type="submit" className={styles.contactFormButton}>ENVIAR</button>
            </form>
          </div>
        </div>
    );
}

export default FormContacto;