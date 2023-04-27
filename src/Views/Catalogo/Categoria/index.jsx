import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Produto,
  Produtos,
  ProdutoName,
  ProdutoPrice,
  ProdutoImage,
} from './styles.module.css';
import { useEffect, useState } from 'react';

async function getByCategory(categoria) {
  console.log(categoria);
  const response = await axios.get(
    `http://localhost:3000/api/products/category/${categoria}`
  );
  const produtos = response.data;

  return produtos.map((produto) => {
    // const price = produto.price;
    return { ...produto, price: `R$ ${produto.price}` };
  });
}

export function Categoria() {
  const { categoria } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getByCategory(categoria).then((res) => {
      setProdutos(res);
    });
  }, [categoria]);

  return (
    <div id="categoria">
      <div className="container">
        <h1>Categoria</h1>
        <div className={Produtos}>
          {produtos.map((p, i) => (
            <div key={`${p}-${i}`} className={Produto}>
              <Link to={`./${p.name}`} className={ProdutoImage}>
                <img src={p.image} alt="" />
              </Link>
              <div>
                <p className={ProdutoName}>{p.name}</p>
                <p className={ProdutoPrice}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
