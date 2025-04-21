import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Servizi from './Servizi';
import LuoghiDiLavoro from './LuoghiDiLavoro';
import ChiSiamo from './ChiSiamo';
import Contatti from './Contatti';

export default function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/luoghi-di-lavoro" element={<LuoghiDiLavoro />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  );
}