import './css/FormContacto.css';
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
        <div>
           <form onSubmit={enviarCorreo}>
                <h1>Contactame!</h1>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="asunto">Asunto:</label>
                <input type="asunto" name="asunto" id="asunto" required />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormContacto;