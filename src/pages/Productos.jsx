import ItemListContainer from "../components/ItemListContainer";

const Productos = () => {
  return (
    <>
      <div className="categorias">
        <ul>
          <li>categorias:</li>
          <li class="linkCategoria">grabación y sonido</li>
          <li class="linkCategoria">sintetizadores</li>
        </ul>
      </div>
      <ItemListContainer />
    </>
  );
};

export default Productos;
