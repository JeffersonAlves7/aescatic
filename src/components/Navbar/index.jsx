import logo from '@/assets/logo.png';
import Busca from '../Busca';
import { navbar, icons, logoImage, busca } from './styles.module.css';
import { Link } from 'react-router-dom';
function getCategorias() {
  return ['acessórios', 'sapatos', 'canecas', 'bolsas/mochilas', 'contato'];
}

export function Navbar() {
  const categorias = getCategorias();
  return (
    <nav className={navbar}>
      <div className="container">
        <ul>
          <li>
            <Link to={'/'}>
              <img src={logo} alt="logo-image" className={logoImage} />{' '}
            </Link>
          </li>
          <li className={busca}>
            <Busca />
          </li>
          <li className={icons}>
            <a href="#">
              <i className="bi bi-person"></i>
            </a>
            <a href="#">
              <i className="bi bi-suit-heart"></i>
            </a>
            <a href="#">
              <i className="bi bi-cart"></i>
            </a>
          </li>
        </ul>
        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria}-${index}`}>{categoria}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
