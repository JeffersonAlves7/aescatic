import { useParams } from 'react-router-dom';

export function Categoria() {
  const { categoria } = useParams();

  return (
    <div id="categoria">
      <h1>Categoria</h1>
      <div>
        <p>{categoria}</p>
      </div>
    </div>
  );
}
