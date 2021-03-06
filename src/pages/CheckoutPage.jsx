import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../firebase";

const CheckoutPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const selectedOrder = db.collection("ordenes").doc(orderId);

    selectedOrder
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Carrito no encontrado");
          return;
        }
        setOrder(doc.data());
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(setIsLoading(false));
  }, [orderId]);

  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (isError) {
    return <h2>Ha ocurrido un error</h2>;
  } else {
    return (
      <div className="cart-container">
        <div className="main-cart">
          <h1 className="cart-title">¡PEDIDO REALIZADO CON ÉXITO!</h1>
          <div className="order-subtitle">
            <h3>
              Gracias por tu compra en <span>Audio Tech Store</span> . A
              continuación podrás encontrar el detalle de la misma.
            </h3>
          </div>
          <hr />
          <div className="order-number">PEDIDO #{orderId}</div>
          <div className="order-shipping">
            <p>DIRECCION DE ENTREGA</p>
            <div className="order-shipping-data">
              {order.buyer?.nombre} {order.buyer?.apellido} -{" "}
              {order.buyer?.direccion}, {order.buyer?.ciudad},{" "}
              {order?.buyer?.pais},{order.buyer?.codigoPostal}.
            </div>
          </div>

          <div className="order-shipping"> DETALLE</div>
          {order.cart?.map((items) => (
            <div key={items?.id} className="order-resume">
              <div className="item-name">
                <h3>{items?.name}</h3>
              </div>
              <div className="item-qty">
                <h3>{items?.cantidad}</h3>
              </div>
              <div className="item-price">
                <h3> $ {items?.precio}</h3>
              </div>
            </div>
          ))}
          <div className="order-price">
            PRECIO TOTAL <span>$ {order?.total}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default CheckoutPage;
