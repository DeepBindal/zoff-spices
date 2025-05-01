'use client'
const { createContext, useState, useEffect, useContext } = require("react");
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const storedQuantity = localStorage.getItem("quantity");
    if (storedQuantity) {
      setQuantity(quantity);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quantity", quantity);
  }, [quantity]);

  return <CartContext.Provider value={{quantity, setQuantity}}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);