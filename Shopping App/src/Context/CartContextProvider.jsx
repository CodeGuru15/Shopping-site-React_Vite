import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
