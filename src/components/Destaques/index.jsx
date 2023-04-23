import { Carousel } from "react-bootstrap";

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
    <Carousel>
      {destaques.map((destaque) => {
        return (
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <h2>
                {destaque}
              </h2>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
