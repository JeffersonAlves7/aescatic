import { Destaques } from "./components/Destaques";
import { Navbar } from "./components/Navbar";
import { Sobre } from "./components/Sobre";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Destaques />
      <Sobre />
    </div>
  );
}

export default App;
