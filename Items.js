import React from "react";
import Card from "../UI/Card";
import "./Items.css"

const productsArr = [
  {
    id : "A1" , 
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id : "A2" , 
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id : "A3" , 
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id : "A4" , 
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
                <Card title={item.title} price={item.price} url={item.imageUrl}></Card>
            )
        })}
      </div>
      <div className="center"><button className="buttn" onClick={props.onCartShow} >Your Cart</button></div>
    </section>
  );
};

export default Items;
