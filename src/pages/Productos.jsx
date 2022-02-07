import ItemListContainer from "../components/ItemListContainer";

const Productos = () => {
  return (
    <>
      <div className="categorias">
        <ul>
          <li>categorias:</li>
          <li className="linkCategoria">grabación y sonido</li>
          <li className="linkCategoria">sintetizadores</li>
        </ul>
      </div>
      <ItemListContainer />
    </>
  );
};

export default Productos;
