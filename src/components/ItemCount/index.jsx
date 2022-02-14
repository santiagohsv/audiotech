
import "./styles.css"

const ItemCount = ({counter,increaseQty, decreaseQty}) => {

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
    </>
  );
};

export default ItemCount;
