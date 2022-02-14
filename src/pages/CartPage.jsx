import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContex } from "../contexts/CartContext";
import Cart from "../components/Cart/";
import "./styles.css";

const CartPage = () => {
  const {cart}=useContext(CartContex)
  return (
 
    <> {cart.length === 0 ? <div className="empty-cart"><h1>No hay productos en el carrito :(</h1> <Link to="/productos" className="secondFont">ir a la tienda</Link></div> : <Cart/>} </>

  );
};

export default CartPage;
