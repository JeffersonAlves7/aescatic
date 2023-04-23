import { Carousel } from "react-bootstrap";
import { carousel } from "./styles.module.css";

function getDestaques() {
  return [
    "3 BLUSAS POR 15 REAIS",
    "3 BLUSAS POR 15 REAIS",
    "3 BLUSAS POR 15 REAIS",
  ];
}

export const Destaques = () => {
  const destaques = getDestaques();
  return (
    <div className="container">
      <Carousel className={carousel}>
        {destaques.map((destaque) => {
          return (
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center h-100">
                <h2>{destaque}</h2>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
