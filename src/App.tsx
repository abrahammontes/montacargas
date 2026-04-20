import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import FacebookButton from './components/FacebookButton';

import Caracteristicas from './components/Caracteristicas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <FacebookButton />
      <main>
        <Hero />
        
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