import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio/Inicio';
import SobreMi from './pages/SobreMi/SobreMi';
import Mercaderia from './pages/Mercaderia/Mercaderia';
import Carrito from './pages/Carrito/Carrito';
import Blog from './pages/Blog/Blog';
import Galeria from './pages/Galeria/Galeria';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Inicio /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/mercaderia" element={<Mercaderia />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
