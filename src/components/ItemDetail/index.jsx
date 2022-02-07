import { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import "./styles.css";


const ItemDetail = ({ item }) => {

  const [counter, setCounter] = useState(1);

  const increaseQty = () => {
    if (counter < item.stock) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const decreaseQty = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const onAdd = () => {
 
    return console.log({counter})
  }

  return (
    <div className="main">
      <div className="item-title ">
        <h1>{item.name}</h1>
      </div>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          <img src={item.img} alt="{item.description}" />
        </div>
        <div className="detailContainer">
          <p className="itemStock">Stock: {item.stock} </p>
          <p className="itemPrice">$ {item.precio}</p>
          <h2>Caracteristicas</h2>
          <p className="productDescription">{item.longDescription}</p>
          <ItemCount counter={counter} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
          <div className="addBtnContainer">
        <button className="onAdd-btn" onClick={onAdd}>
          Agregar al carrito{" "}
        </button>
        <button className="detail-btn show-cart-btn" >
              <Link  to={"/cart"}>
                Ver Carrito
              </Link>
            </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;