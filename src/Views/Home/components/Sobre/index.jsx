import { flex, p, bi } from "./styles.module.css";

export function Sobre() {
  return (
    <div className="container">
      <div className={flex}>
        <div>
          <div className={bi}>
            <i className="bi bi-credit-card-fill"></i>
          </div>
          <p className={p}>
            Parcele suas compras <br></br>em até 12x
          </p>
        </div>
        <div>
          <div className={bi}>
            <i className="bi bi-truck"></i>
          </div>
          <p className={p}>
            Frete grátis acima de <br></br>150 reais
          </p>
        </div>
        <div>
          <div className={bi}>
            <i className="bi bi-box-seam"></i>
          </div>
          <p className={p}>
            Troca e devolução em <br></br>até 7 dias
          </p>
        </div>
        <div>
          <div className={bi}>
            <i className="bi bi-percent"></i>
          </div>
          <p className={p}>
            Pague no pix e ganhe <br></br>desconto
          </p>
        </div>
      </div>
    </div>
  );
}
