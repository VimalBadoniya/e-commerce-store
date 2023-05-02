import React, { useContext } from "react";
import "./Card.css";
import CartContext from "../source/cart-context";

const Card = (props) => {
  const ctx = useContext(CartContext)
  
  const addButtonHandler = (data)=>{
    const obj = {
      title : data.title ,
      price : data.price ,
      quantity : 1 ,
    }
ctx.addToCart(obj);
alert("Product added to Cart")

  }
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <main > 
        <img src={props.url} alt="album" />
      </main>
      <footer className="footer">
        <span className="price">₹{props.price} </span>{" "}
        <span>
          <button className="buttonCart" onClick={()=>{addButtonHandler(props)}} >Add To Cart</button>
        </span>
      </footer>
    </div>
  );
};

export default Card;
