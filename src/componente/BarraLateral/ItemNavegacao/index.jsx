import styled from "styled-components";

const ItemStylized = styled.li`
  font-size: 1.5rem;
  line-height: 1.7rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) => (props.$ativo ? "GandhiSansBold" : "GandhiSansRegular")};
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemStylized $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemStylized>
  );
};

export default ItemNavegacao;
