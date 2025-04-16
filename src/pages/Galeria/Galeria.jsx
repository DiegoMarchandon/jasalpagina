import './Galeria.css';
import IMGvalues from '../../services/imagenes.js'; 

function Galeria(){
    return (
        <div className="galeria-container">
      <header className="galeria-header">
        <h1>Galería de Jasal</h1>
        <p className="galeria-subtitulo">Un recorrido visual por sus momentos más íntimos 📸</p>
      </header>

      <section className="galeria-grid">
        {IMGvalues.map((foto, index) => (
          <div className="foto-item" key={index}>
            <img src={foto} alt={`Sesión ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
    );
}
export default Galeria;