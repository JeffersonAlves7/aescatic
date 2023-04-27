import { useParams } from 'react-router-dom';
import {
  imgsR,
  centralImg,
  flex,
  btnTamanho,
  infos,
} from './styles.module.css';

function getInfo(categoria, peca) {
  console.log({ categoria, peca });

  const product = {
    name: peca,
    img: '',
    price: 30,
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: ['blue', 'red'],
  };

  product.price = `R$ ${product.price}`;
  return product;
}

export function Info() {
  const { categoria, peca } = useParams();

  const info = getInfo(categoria, peca); // Essa variavel vai ter todas as informacoes sobre o produto

  return (
    <div>
      <h1>Cropped Vermelho</h1>
      <div className={infos}>
        <div className={flex}>
          <div className={imgsR}>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className={centralImg}>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <div>
            <p>{info.price}</p>
            <span>3x de 10 sem juros</span>
            <p>Tamanho:</p>
            <div className={btnTamanho}>
              {info.sizes.map((size) => {
                return <button key={'size'}>{size}</button>;
              })}
            </div>
            <p>Cor:</p>
            <select name="" id="">
              {info.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
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
