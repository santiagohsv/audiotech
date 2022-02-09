import "./styles.css";
import shoppingCart from "./media/bag.png";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContex } from "../../contexts/CartContext";



const CardWidget = () => {
  const navigate = useNavigate();
  const {cart, getQty} = useContext(CartContex)


  return  <div className="header-cart">
  <img src={shoppingCart} alt="shoppingCart"  className="header-cart-logo"  onClick={()=> navigate('/cart')} />
 { getQty() !==0 &&  <h3 className="header-cart-counter">{getQty()}</h3>} 
  </div>


};


export default CardWidget;
