import { busca } from './styles.module.css';

export default function Busca() {
  return (
    <div className={busca}>
      <input type="text" placeholder="Buscar" />
      <button>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
