import styled from "styled-components";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { RiExpandDiagonalSLine } from "react-icons/ri";

const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
`;

const Card = styled.div`
  border-radius: 20px;
  height: 24rem;
  background-color: #001634;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 24px;
  img {
    width: 100%;
    height: 18rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const Informacoes = styled.section`
  padding: 0.8rem;
  box-sizing: border-box;
`;

const Legendas = styled.div`
  display: flex;
  flex-direction: column;
  h6 {
    color: #fff;
    margin: 0;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    color: #fff;
  }
`;

const Acoes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const CardImagem = ({ fotos, aoZoomSolicitado }) => {
  return (
    <ContainerCard>
      {fotos.map((foto) => (
        <Card key={foto.id}>
          <img src={foto.path} alt={foto.titulo} />
          <Informacoes>
            <Legendas>
              <h6>{foto.titulo}</h6>
              <p>{foto.fonte}</p>
            </Legendas>
            <Acoes>
              <IoIosHeartEmpty
                style={{ cursor: "pointer" }}
                size={30}
                color="#fff"
              ></IoIosHeartEmpty>
              <RiExpandDiagonalSLine
                style={{ cursor: "pointer" }}
                size={30}
                color="#fff"
                onClick={() => aoZoomSolicitado(foto)}
              ></RiExpandDiagonalSLine>
            </Acoes>
          </Informacoes>
        </Card>
      ))}
    </ContainerCard>
  );
};

export default CardImagem;
