import ItemCount from "../ItemCount";
import "./styles.css";

function ItemListContainer({ productTittle, productPrice,productStock }) {
  return (
    <div className="item-list-card">
      <p>{productTittle}</p>
      <p>Precio: ${productPrice}</p>
      <ItemCount stock={productStock} initialQty={1}/>
    </div>
  );
}

export default ItemListContainer;
