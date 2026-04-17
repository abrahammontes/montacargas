import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import Caracteristicas from './components/Caracteristicas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalogo />
        <Caracteristicas />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;