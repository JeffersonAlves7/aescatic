import { Destaques } from "./components/Destaques";
import { Navbar } from "./components/Navbar";
import { Sobre } from "./components/Sobre";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <div id="Home">
      <Navbar />
      <Destaques />
      <Sobre />
      <Footer />
    </div>
  );
}
