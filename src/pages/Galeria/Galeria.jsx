import './Galeria.css';
import imagenes from '../../services/imagenes.js'; 

function Galeria(){
  return (
    <div className="galeria">
      {imagenes.map(foto => (
        <div key={foto.id} className="foto">
          <img src={foto.src} alt={foto.alt} />
        </div>
      ))}
    </div>
  );
}
export default Galeria;