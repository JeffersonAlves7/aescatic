import { useParams } from 'react-router-dom';

function getInfo() {
  return {};
}

export function Info() {
  const { categoria, peca } = useParams();

  const info = getInfo(); // Essa variavel vai ter todas as informacoes sobre o produto

  return (
    <div id="info">
      <h1>info</h1>
      <div>
        <p>{categoria}</p>
        <p>{peca}</p>
      </div>
    </div>
  );
}
