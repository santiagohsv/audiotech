import React from "react";
import "./styles.css"


const ItemCount = ({ stock, initialQty }) => {
  const [counter, setCounter] = React.useState(initialQty);

  const increaseQty = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decreaseQty = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {

    if (stock===0)
    {console.log("No hay stock")
       
    }else{ console.log(counter)}

  }

  return (
    <>
      <div className="qtyContainer">
        <button onClick={decreaseQty}>-</button>
        <p> {counter}</p>
        <button onClick={increaseQty}>+</button>
      </div>
      <div>
        <button  className="onAdd-btn" onClick={onAdd}>Agregar al carrito </button>
      </div>
    </>
  );
};

export default ItemCount;
