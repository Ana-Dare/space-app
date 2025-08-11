import styled from "styled-components";
import CampoDeTexto from "../CampoTexto";

const HeaderStylized = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <>
      <HeaderStylized>
        <img src="/icones/logo.png" alt="Logo" />
        <CampoDeTexto />
      </HeaderStylized>
    </>
  );
};

export default Cabecalho;
