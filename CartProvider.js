import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const initialCartState = {
    cartItems : [] ,
    totalAmount : Number ,
    totalQuantity : Number ,
}

const CartReducer = (state , action)=>{

}

const CartProvider = (props) => {
const [cartState , dispatchCartAction]= useReducer(CartReducer , initialCartState)

  const contextObj = {
    cartItems: cartElements,
    totalQuantity: 3,
    totalAmount: 220,
  };
  return (
    <CartContext.Provider value={contextObj}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
