import { Destaques } from './components/Destaques';
import { Sobre } from './components/Sobre';
import { Footer } from './components/Footer';

export function Home() {
  return (
    <div id="Home">
      <Destaques />
      <Sobre />
      <Footer />
    </div>
  );
}
