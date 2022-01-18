import "./styles.css";

function ItemListContainer({ productTittle, productPrice }) {
  return (
    <div className="item-list-card">
      <p>{productTittle}</p>
      <p>Precio: ${productPrice}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemListContainer;
