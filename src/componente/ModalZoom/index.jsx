import CardImagem from "../Galeria/Imagem";

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <dialog open={!!foto}>
          <CardImagem fotos={[foto]} />
          <form method="dialog">
            <button type="submit">ok</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ModalZoom;
