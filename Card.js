import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <header>
        <h2>{props.name}</h2>
      </header>
      <main > 
        <img src={props.url} alt="album" />
      </main>
      <footer className="footer">
        <span className="price">₹{props.price} </span>{" "}
        <span>
          <button className="buttonCart">Add To Cart</button>
        </span>
      </footer>
    </div>
  );
};

export default Card;
