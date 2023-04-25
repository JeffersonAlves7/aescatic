import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import { Home } from './Views/Home';

import { Catalogo } from './Views/Catalogo';
import { Categoria } from './Views/Catalogo/Categoria';
import { Info } from './Views/Catalogo/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:categoria" element={<Categoria />} />
          <Route path="/catalogo/:categoria/:peca" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
