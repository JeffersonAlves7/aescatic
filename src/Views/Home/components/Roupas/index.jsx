import { flex } from './styles.module.css';

export function Roupas() {
  return (
    <div>
      <div className={flex}>
        <h1>Croppeds</h1>
        <div>
          <label htmlFor="">Filtrar por:</label>
          <select className="filter">
            <option value="">Recomendar</option>
            <option value="maior">Maior preço</option>
            <option value="">Menor preço</option>
          </select>
        </div>
      </div>
      <div></div>
    </div>
  );
}
