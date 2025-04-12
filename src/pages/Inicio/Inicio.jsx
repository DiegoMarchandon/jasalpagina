import './styles.css';
import Tachuela from '../../assets/thumb-tack.png';
function Inicio() {
  return (
    <div className="site-inicio">
      <div className="inicio-content">
        <h1>Bienvenido a mi página</h1>
        <p>Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
        <a href="#contacto" className="inicio-btn">Contáctame</a>
      </div>
      <section id="eventos">
          <h2>Próximos Eventos!</h2>
          <img src={Tachuela} alt="tachuela logo" id="tachuela-img"/>
        <ul className="eventos-lista">
          <li>
            <div className='info-eventos'>
            <span className="fecha">20 Abr 2025</span>
            <span className="lugar">Teatro Ópera, Buenos Aires</span>
            </div>
            <div className='direccion-container'>
              <a href="" className="enlaces-inicio">Comprar entradas</a>
              <span className="flechas">
                <span>&gt;</span>
                <span>&gt;</span>
                <span>&gt;</span>
              </span>
            </div>
          </li>
          <li>
            <div className='info-eventos'>
            <span className="fecha">27 Abr 2025</span>
            <span className="lugar">Sala Zitarrosa, Montevideo</span>
            </div>
            <div className='direccion-container'>
              <a href="" className="enlaces-inicio">Comprar entradas</a>
              <span className="flechas">
                <span>&gt;</span>
                <span>&gt;</span>
                <span>&gt;</span>
              </span>
            </div>
          </li>
          <li>
            <div className='info-eventos'>
            <span className="fecha">5 May 2025</span>
            <span className="lugar">Niceto Club, Buenos Aires</span>
            </div>
            <div className='direccion-container'>
              <a href="" className="enlaces-inicio">Comprar entradas</a>
              <span className="flechas">
                <span>&gt;</span>
                <span>&gt;</span>
                <span>&gt;</span>
              </span>
            </div>
          </li>
        </ul>
      </section>

    </div>
  );
}
  
  export default Inicio;
  