import { useState } from "react";
import tags from "./tags.json";
import { styled } from "styled-components";

const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  font-size: 1.5rem;
  color: #ffff;
  gap: 4rem;
  padding-top: 2rem;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  width: fit-content;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: solid 2px;
  border-radius: 10px;
  color: #ffff;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 400;
  cursor: pointer;
  border-color: ${({ $ativo }) => ($ativo ? "#C98CF1" : "transparent")};
`;

const Tags = ({setTag}) => {
  return (
    <>
      <ContainerTags>
        <p>Busque por tags:</p>
        <ContainerButton>
          {tags.map((tag) => (
            <Button key={tag.id} onClick={() => setTag(tag.tag)}>
              {tag.titulo}
            </Button>
          ))}
        </ContainerButton>
      </ContainerTags>
    </>
  );
};

export default Tags;
