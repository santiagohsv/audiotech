import "./styles.css";
import trash from "./media/trash-can.png";
import { useContext } from "react";
import { CartContex } from "../../contexts/CartContext";
import { getFirestore } from "../../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, clear, getPrice, removeItem } = useContext(CartContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
     let userData = data;
    const newOrder = {
      buyer: {
      ...userData
      },
      cart,
      total: getPrice(),
    };
  
    const db = getFirestore();
    db.collection("ordenes")
      .add(newOrder)
      .then((res) => 
        navigate(`/audiotech/checkout/${res.id}`))
      .catch((error)=>console.log(error))
      .finally(clear());
  }

  return (
    <div className="cart-container">
      <div className="main-cart">
        <h1 className="cart-title">CARRITO DE COMPRAS</h1>
        <div className="cart-subtitle">
          <h3>
            <Link to="/audiotech/Productos">CONTINUAR COMPRANDO</Link>
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

        <div className="total-price">
          <h2>PRECIO TOTAL: $ {getPrice()} </h2>
        </div>
      </div>
      <div className="cart-detail">
        <h2 className="cart-title">CHECKOUT</h2>
        <div className="cart-detail-subtitle">
          <h3>DATOS PERSONALES </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <input
            type="text"
            name="nombre"
            placeholder="NOMBRE"
            {...register("nombre", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z]+$/g, // verifico que no tenga números ni símbolos.
                message: "Ingrese únicamente letras",
              },
            })}
          />

          <div className="form-error-msg">
            {errors.nombre && (
              <span className="form-warning">{errors.nombre.message}</span>
            )}
          </div>

          <input
            type="text"
            name="apellido"
            placeholder="APELLIDO"
            {...register("apellido", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z]+$/g, // verifico que no tenga números ni símbolos.
                message: "Ingrese únicamente letras",
              },
            })}
          />

          <div className="form-error-msg">
            {errors.apellido && (
              <span className="form-warning">{errors.apellido.message}</span>
            )}
          </div>

          <input
            type="text"
            name="email"
            placeholder="CORREO"
            {...register("email", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /\S+@\S+\.\S+/g, // validacion mail
                message: "El formato no es correcto. Ej. example@mail.com",
              },
            })}
          />
          <div className="form-error-msg">
            {errors.email && (
              <span className="form-warning">{errors.email.message}</span>
            )}
          </div>
          <input
            type="text"
            name="phone"
            placeholder="TELEFONO"
            {...register("phone", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^\+\d{10,}$/,
                message: " Ej. +54 XXX X XXX XXX - Al menos 10 números",
              },
            })}
          />
          <div className="form-error-msg">
            {errors.phone && (
              <span className="form-warning">{errors.phone.message}</span>
            )}
          </div>

          <div className="shipping-subtitle">
            <h3>DATOS DEL ENVIO </h3>
          </div>

          <input
            type="text"
            name="direccion"
            placeholder="DIRECCION"
            {...register("direccion", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-z0-9\s,'-]*$/i,
                message: "Ingrese una dirección válida",
              },
            })}
          />
          <div className="form-error-msg">
            {errors.direccion && (
              <span className="form-warning">{errors.direccion.message}</span>
            )}
          </div>

          <input
            type="text"
            name="ciudad "
            placeholder="CIUDAD"
            {...register("ciudad", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z]+$/g, // verifico que no tenga números ni símbolos.
                message: "Ingrese una ciudad válida",
              },
            })}
          />
          <div className="form-error-msg">
            {errors.ciudad && (
              <span className="form-warning">{errors.ciudad.message}</span>
            )}
          </div>

          <input
            type="text"
            name="pais"
            placeholder="PAIS"
            {...register("pais", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z]+$/g, // verifico que no tenga números ni símbolos.
                message: "Ingrese país válidoß",
              },
            })}
          />

          <div className="form-error-msg">
            {errors.pais && (
              <span className="form-warning">{errors.pais.message}</span>
            )}
          </div>

          <input
            type="text"
            name="codigoPostal"
            placeholder="CODIGO POSTAL"
            {...register("codigoPostal", {
              required: {
                value: true,
                message: "campo obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/g, // verifica teléfono contenga números y simbolo +^
                message: "El formato no es correcto",
              },
            })}
          />
          <div className="form-error-msg">
            {errors.codigoPostal && (
              <span className="form-warning">
                {errors.codigoPostal.message}
              </span>
            )}
          </div>

          <button type="submit" className="checkout-btn">
            {" "}
            TERMINAR COMPRA{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;

