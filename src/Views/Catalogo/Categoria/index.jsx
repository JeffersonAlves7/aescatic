import { Link, useParams } from 'react-router-dom';
import {
  Produto,
  Produtos,
  ProdutoName,
  ProdutoPrice,
  ProdutoImage,
} from './styles.module.css';

function getByCategory(categoria) {
  console.log(categoria);
  const produtos = [
    {
      name: 'CROPPED VERMELHO',
      price: 30.0,
      img: '',
    },
    {
      name: 'CROPPED VERMELHO',
      price: 30.0,
      img: '',
    },
    {
      name: 'CROPPED VERMELHO',
      price: 30.0,
      img: '',
    },
    {
      name: 'CROPPED VERMELHO',
      price: 30.0,
      img: '',
    },
    {
      name: 'CROPPED VERMELHO',
      price: 30.0,
      img: '',
    },
  ];

  return produtos.map((produto) => {
    const price = produto.price;
    return { ...produto, price: `R$ ${price}` };
  });
}

export function Categoria() {
  const { categoria } = useParams();
  const produtos = getByCategory(categoria);

  return (
    <div id="categoria">
      <div className="container">
        <h1>Categoria</h1>
        <div className={Produtos}>
          {produtos.map((p, i) => (
            <div key={`${p}-${i}`} className={Produto}>
              <Link to={`./${p.name}`} className={ProdutoImage}>
                <img src={p.img} alt="" />
              </Link>
              <p className={ProdutoName}>{p.name}</p>
              <p className={ProdutoPrice}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
