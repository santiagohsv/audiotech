import { createContext, useState } from "react";

export const CartContex = createContext({});

CartContex.displayName = "CartContex";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, counter) => {

    const isInCart = cart.find((cartItem) => cartItem.id === item.id) === undefined ? false : true;

    if (isInCart) {
      const index = cart.findIndex((prod) => prod.id === item.id);
      cart[index].cantidad = cart[index].cantidad + counter;
    } else {
      const newItem = { ...item, cantidad: counter };
      setCart([...cart, newItem]);
    }
  };

/*  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };*/

  const clear = () => {
    setCart([]);
  }; 

  return (
    <CartContex.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContex.Provider>
  );
};