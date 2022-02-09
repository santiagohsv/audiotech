import { useContext } from "react"
import { CartContex } from "../../contexts/CartContext";
import "./styles.css";
import trash from "./media/trash-can.png"

const Cart = () => {
  const { cart,getPrice, removeItem } = useContext(CartContex);

  return (
    <>
      
      {cart.map((items) => (
        <div key={items.id} className="item-resume">
          <div className="item-img">
            <img src={items.img} alt="{items.description} " />
          </div>
          <div className="item-name">
            <h3>{items.name}</h3>
          </div>
          <div className="item-qty">
            <h3>{items.cantidad}</h3>
          </div>
          <div className="item-price">
            <h3> $ {items.precio}</h3>
          </div>
          <button className="removeBtn" onClick={()=>removeItem(items.id)} >
          <img className="trashImg" src={trash} /> 
          </button>
        </div>
      ))}
      <div className="total-price"><h2 >Total: $ {getPrice()}</h2></div>
 
    </>
  );
};

export default Cart


/* import { useContext } from "react"
import { CartContex } from "../../contexts/CartContext";
import "./styles.css";

const Cart = () => {
  const { cart } = useContext(CartContex);

  return (
    <>
      
      {cart.map((items) => (
        <div key={items.id} className="item-resume">
          <div className="item-img">
            <img src={items.img} alt="{items.description} " />
          </div>
          <div className="item-name">
            <h3>{items.name}</h3>
          </div>
          <div className="item-qty">
            <h3>{items.cantidad}</h3>
          </div>
          <div className="item-price">
            <h3> $ {items.precio}</h3>
          </div>
          <button className="removeBtn">
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart */