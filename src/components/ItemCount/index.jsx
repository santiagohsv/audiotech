
import "./styles.css"

const ItemCount = ({counter,increaseQty, decreaseQty}) => {

  const onAdd = () => {
 
    return console.log({counter})
  }
 
  return (
    <>
      <div className="qtyContainer">
        <button onClick={decreaseQty} className="qty-btn">
          -
        </button>

        <h4> {counter}</h4>
        <button onClick={increaseQty} className="qty-btn">
          +
        </button>
      </div>
      <div className="addBtnContainer">
        <button className="onAdd-btn" onClick={onAdd}>
          Agregar al carrito{" "}
        </button>
      </div>
    </>
  );
};

export default ItemCount;
