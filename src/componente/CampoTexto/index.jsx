import styled from "styled-components";
import iconSearch from "../../assets/search.png";

const InputSearch = styled.div`
  height: 3rem;
  border: solid 2px;
  border-color: #c98cf1;
  align-items: center;
  display: flex;
  width: 30%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  input {
    border: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 3rem;
    color: #fff;
  }
  input:focus {
    outline: none;
  }
`;

const CampoDeTexto = ({ filtro, setFiltro }) => {
  return (
    <InputSearch>
      <input
        value={filtro}
        onChange={(evento) => {
          setFiltro(evento.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <img src={iconSearch} />
    </InputSearch>
  );
};

export default CampoDeTexto;
