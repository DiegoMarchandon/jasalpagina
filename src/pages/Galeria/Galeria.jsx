import './Galeria.css';
import foto2 from 'https://imgur.com/S0qFIIE';
import foto1 from 'https://imgur.com/qZ5p8pD';
import foto3 from 'https://imgur.com/Yz3TFwG';
import foto4 from 'https://imgur.com/ofp3qYN';
import foto5 from 'https://imgur.com/7DJ7fTB';

const imagenes = {
    foto1: 'https://imgur.com/S0qFIIE.jpeg',
    foto2: 'https://imgur.com/qZ5p8pD.jpeg',
    foto3: 'https://imgur.com/Yz3TFwG.jpeg',
    foto4: 'https://imgur.com/ofp3qYN.jpeg',
    foto5: 'https://imgur.com/7DJ7fTB.jpeg'
}
function Galeria(){
    return (
        <div className="galeria-container">
      <header className="galeria-header">
        <h1>Galería de Jasal</h1>
        <p className="galeria-subtitulo">Un recorrido visual por sus momentos más íntimos 📸</p>
      </header>

      <section className="galeria-grid">
        {imagenes.map((foto, index) => (
          <div className="foto-item" key={index}>
            <img src={foto} alt={`Sesión ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
    );
}
export default Galeria;