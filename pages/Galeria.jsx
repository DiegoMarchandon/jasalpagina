import '../styles/Galeria.module.css';
import {imagenes} from '../src/services/services.js'; 
import Image from 'next/image';
function Galeria(){
  return (
    <div className="galeria">
      {imagenes.map(foto => (
        <div key={foto.id} className="foto">
          <Image src={foto.src} alt={foto.alt} sizes="100vw" width={0} height={0} style={{width:'100%',height:'auto', display: 'block'}}/>
        </div>
      ))}
    </div>
  );
}
export default Galeria;