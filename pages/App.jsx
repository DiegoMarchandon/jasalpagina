import Link from 'next/link';
import Navbar from '../src/components/Navbar';
// import Inicio from './pages/Inicio/Inicio';
// import SobreMi from './pages/SobreMi/SobreMi';
// import Mercaderia from './pages/Mercaderia/Mercaderia';
// import Carrito from './pages/Carrito/Carrito';
// import Blog from './pages/Blog/Blog';
// import Galeria from './pages/Galeria/Galeria';
import Footer from '../src/components/Footer';
// import Header from './components/Header';
import '../styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <Link href="/" >Inicio</Link>
        <Link href="/sobre-mi" >Sobre Mí</Link>
        <Link href="/mercaderia" >Mercadería</Link>
        <Link href="/blog" >Blog</Link>
        <Link href="/galeria" >Galería</Link>
        <Link href="/carrito" >Carrito</Link>
      </main>
      <Footer />
    </div>
  );
}

export default App;
