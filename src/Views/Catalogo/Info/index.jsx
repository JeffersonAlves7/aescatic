import { useParams } from 'react-router-dom';
import {
  viewImg,
  imgsR,
  centralImg,
  flex,
  btnTamanho,
  infos,
} from './styles.module.css';

function getInfo() {
  return {};
}

export function Info() {
  const { categoria, peca } = useParams();

  const info = getInfo(); // Essa variavel vai ter todas as informacoes sobre o produto

  return (
    <div>
      <h1>Cropped Vermelho</h1>
      <div className={infos}>
        <div className={flex}>
          <div className={imgsR}>
            <div className={viewImg}></div>
            <div className={viewImg}></div>
            <div className={viewImg}></div>
          </div>
          <img className={centralImg} src="" alt="" />
        </div>
        <div>
          <div>
            <p>R$ 30,00</p>
            <span>3x de 10 sem juros</span>
            <p>Tamanho:</p>
            <div className={btnTamanho}>
              <button>PP</button>
              <button>P</button>
              <button>M</button>
              <button>G</button>
              <button>GG</button>
            </div>
            <p>Cor:</p>
            <select name="" id="">
              <option value="">azul</option>
            </select>
            <p>Quantidade:</p>
            <div className={flex}>
              <input type="number" />
              <i className="bi bi-suit-heart"></i>
              <i className="bi bi-cart"></i>
            </div>
            <button>Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
