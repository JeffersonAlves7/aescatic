import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  imgsR,
  centralImg,
  flex,
  btnTamanho,
  infos,
  btnBuy,
  price,
  tamanho,
  select,
  icones,
  infoPrice,
  color,
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
  const [count, setCount] = useState(0);

  function adicionarItem() {
    setCount(count + 1);
  }

  function removerItem() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

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
            <div className={price}>
              <h2 className={infoPrice}>{info.price}</h2>
              <span>3x de 10 sem juros</span>
            </div>
            <div className={tamanho}>
              <p>Tamanho:</p>
              <div className={btnTamanho}>
                {info.sizes.map((size) => {
                  return <button key={'size'}>{size}</button>;
                })}
              </div>
            </div>
            <div className={color}>
              <p>Cor:</p>
              <select name="" className={select}>
                {info.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className={flex}>
              <button onClick={removerItem}>-</button>
              <p>{count}</p>
              <button onClick={adicionarItem}>+</button>
              <div className={icones}>
                <i className="bi bi-suit-heart"></i>
                <i className="bi bi-cart"></i>
              </div>
            </div>
            <button className={btnBuy}>Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
