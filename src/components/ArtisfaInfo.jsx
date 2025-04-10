import ArtistaInfo from './css/ArtistaInfo.css';

function ArtistaInfo(){
    const canciones = ['Mundo irreal', 'VACACIONES', 'Mijita, ¿cuándo va a pololear?','No te cierres','Invitación','Me despido'];
    const artista = 'Jasal';

    // los componentes (como este deben sí o sí retoranr HTML en UN nodo)
    return (
        <div>
            <h1>
                Artista: {artista}
                <br />
                <p>
                    Bienvenido a la página oficial de {artista}. 
                    Aquí podrás encontrar toda la información sobre su música, conciertos y novedades.
                    <h2>Mis canciones:</h2>
                    <ul>
                        {canciones.map((cancion,index)=> (
                            <li key={index}>{cancion}</li>
                        ))}
                    </ul>
                </p>
            </h1>
        </div>
    );

}