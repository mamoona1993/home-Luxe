import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("moonaCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 200,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, quantity, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, quantity, product } });
  };

  const decrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_AMOUNT" });
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("moonaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
