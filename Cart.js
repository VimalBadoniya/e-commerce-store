import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../source/cart-context";
import "./Cart.css";
import { GoAlert } from "react-icons/go";
import {TiTick} from "react-icons/ti";



const Cart = (props) => {
  const ctx = useContext(CartContext);
  const removeItem = (data)=>{
   ctx.removeFromCart(data)
  }

  if(ctx.totalQuantity<1){
     return(
      <Modal>
        <div className="div5">
          <h2>Please Add Items to Cart</h2>
          <button onClick={props.onCartClose}><GoAlert/>Okay</button>
        </div>
      </Modal>
     )
  }
  return (
    <Modal>

      <div className="div1">
        <div className="div2">
          
          <ul>
            {ctx.cartItems.map((item) => {
              
              return (
                <li className="li1" >
                  {item.title} ₹{item.price} x {item.quantity}
                  <button className="removebtn" onClick={()=>{removeItem(item)}}>Remove</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="div3">
          <span>Total Amount</span>
          <span>₹{ctx.totalAmount}</span>
        </div>
        <div className="div4">
          <button onClick={props.onCartClose}><GoAlert/>Cancel</button>
          <button onClick={()=>{
            alert("Order Created Successfully")
            props.onCartClose() ;
          }}><TiTick/>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
