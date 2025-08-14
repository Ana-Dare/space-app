import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import CardImagem from "./Imagem";
import { useEffect } from "react";

const GaleriaContainer = styled.div`
  display: flex;
`;
const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const Galeria = ({
  fotos = [],
  setTag,
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {

  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <CardImagem
            aoZoomSolicitado={aoFotoSelecionada}
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={fotos}
          ></CardImagem>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
