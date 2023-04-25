import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roupas" element={<Roupas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
