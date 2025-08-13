import Titulo from "../../Titulo";
import styled from "styled-components";

import fotos from "./fotos-populares.json";

const ContainerPopulares = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColunaImagens = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 1rem;
`;

const Imagem = styled.div`
  padding: 0 0.5rem;
  img {
    border-radius: 20px;
    max-width: 212px;
  }
`;

const ButtonStylized = styled.div`
  padding: 0 1rem;
  button {
    border: solid 1px #7b78e5;
    color: #fff;
    background-color: transparent;
    padding: 1rem;
    width: 100%;
    border-radius: 10px
  }
`;

const Populares = () => {
  return (
    <ContainerPopulares>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaImagens>
        {fotos.map((foto) => (
          <Imagem key={foto.id}>
            <img src={foto.path} alt={foto.titulo} key={foto.id} />
          </Imagem>
        ))}
        <ButtonStylized>
          <button>Ver mais</button>
        </ButtonStylized>
      </ColunaImagens>
    </ContainerPopulares>
  );
};
export default Populares;
