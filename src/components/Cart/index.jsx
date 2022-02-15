import "./styles.css";
import trash from "./media/trash-can.png";
import { useContext, useState } from "react";
import { CartContex } from "../../contexts/CartContext";
import { getFirestore } from "../../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";




const Cart = () => {
  const navigate = useNavigate();

  const { cart, clear, getPrice, removeItem } = useContext(CartContex);
  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [mail, setMail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      buyer: {
        name,
        firstName,
        mail,
        phone,
        address,
        city,
        country,
        postalCode
      },
      cart,
      total: getPrice(),
    };

    const db = getFirestore();
    db.collection("ordenes")
      .add(newOrder)
      .then((res) => 
        navigate(`/checkout/${res.id}`))
      .then (clear());
  };

  return (
    <div className="cart-container">
      <div className="main-cart">
        <h1 className="cart-title">CARRITO DE COMPRAS</h1>
        <div className="cart-subtitle">
          <h3>
            <Link to="/Productos">CONTINUAR COMPRANDO</Link>
          </h3>
        </div>
        <hr />

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
            <button className="removeBtn" onClick={() => removeItem(items.id)}>
              <img className="trashImg" alt="trash-button" src={trash} />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-detail">
        <h2 className="cart-title">CHECKOUT</h2>
        <div className="cart-detail-subtitle">
          <h3>DATOS PERSONALES </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NOMBRE"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="APELLIDO"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            id="mail"
            name="mail"
            placeholder="MAIL"
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="TELEFONO"
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="shipping-subtitle">
            <h3>DATOS DEL ENVIO </h3>
          </div>

          <input
            type="text"
            id="domicilio"
            name="domicilio"
            placeholder="DOMICILIO"
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            id="ciudad"
            name="ciudad"
            placeholder="CIUDAD"
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            id="pais"
            name="pais"
            placeholder="PAIS"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            id="codigopostal"
            name="codigopostal"
            placeholder="CODIGO POSTAL"
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <input
            type="submit"
            className="checkout-btn"
            value="Terminar compra"
          />
        </form>

        <div className="total-price">
          <h2>PRECIO TOTAL: $ {getPrice()} </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;




