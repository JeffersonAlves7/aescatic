import { Destaques } from "./components/Destaques";
import { Navbar } from "./components/Navbar";
import { Roupas } from "./components/Roupas";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Destaques />
      <Roupas />
    </div>
  );
}

export default App;
