import styled from "styled-components";
import EstilosGlobais from "./componente/EstilosGlobais";
import Cabecalho from "./componente/Cabecalho";
import Banner from "./componente/Banner";
import BannerImg from "./assets/banner.png";
import BarraLateral from "./componente/BarraLateral";
import Galeria from "./componente/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componente/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 1.5rem;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [fotosDagaleria, setFotosdaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={BannerImg}
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDagaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} />
    </FundoGradiente>
  );
}

export default App;
