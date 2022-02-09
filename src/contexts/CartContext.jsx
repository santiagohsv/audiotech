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

 const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const getQty = () => {
    return cart.reduce((total, item) => item.cantidad+total, 0);
  }; 

  const getPrice = () => {
    return cart.reduce((total, item) => item.cantidad*item.precio +total, 0);
  }; 

  const clear = () => {
    setCart([]);
  }; 

  return (
    <CartContex.Provider value={{ cart, addItem, clear, getQty, removeItem, getPrice}}>
      {children}
    </CartContex.Provider>
  );
};