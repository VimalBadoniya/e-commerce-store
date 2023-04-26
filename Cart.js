import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../source/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  return (
    <Modal>
      <div className="div1">
        <div className="div2">
          <ul>
            {ctx.cartItems.map((item) => {
              return (
                <li className="li1">
                  {item.title} ₹{item.price} x {item.quantity}
                  <button className="removebtn">Remove</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="div3">
          <span>Total Amount</span>
          <span>₹420</span>
        </div>
        <div className="div4">
          <button onClick={props.onCartClose}>Cancel</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
