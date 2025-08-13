import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  padding: 1.5rem;
  background-color: #04244f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgRedesSociais = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: fit-content;
  gap:1.5rem;
`;

const Texto = styled.div`
  color: white;
  font-size: 1rem;
  align-self: center;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ImgRedesSociais>
        <img src="../sociais/facebook.svg" alt="Facebook" />
        <img src="../sociais/instagram.svg" alt="Instagram" />
        <img src="../sociais/twitter.svg" alt="Twitter" />
      </ImgRedesSociais>
      <Texto>Desenvolvido por Ana Laura</Texto>
    </RodapeEstilizado>
  );
};

export default Rodape;
