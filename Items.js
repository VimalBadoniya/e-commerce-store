import React from "react";
import Card from "../UI/Card";
import "./Items.css"

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
]; 

const Items = (props) => {
  return (
    <section>
      <h2 className="center">MUSIC</h2>
      <div className="container">
        {productsArr.map((item)=>{
            return (
                <Card name={item.title} price={item.price} url={item.imageUrl}></Card>
            )
        })}
      </div>
      <div className="center"><button className="buttn" onClick={props.onCartShow} >Your Cart</button></div>
    </section>
  );
};

export default Items;
