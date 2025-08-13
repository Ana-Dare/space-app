import styled from "styled-components";
import CardImagem from "../Galeria/Imagem";
import { IoIosClose } from "react-icons/io";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: fixed;
  top: 100px;
  background-color: transparent;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 15px;
      right: 80px;
      background-color: transparent;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay onClick={aoFechar} />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <CardImagem fotos={[foto]} aoAlternarFavorito={aoAlternarFavorito} />
            <form method="dialog">
              <button formMethod="dialog" onClick={aoFechar}>
                <IoIosClose size={30} />
              </button>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
