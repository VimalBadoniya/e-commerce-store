import React, { useContext } from "react";
// import Card from "./Card";
import "./Items.css";
import CartContext from "../source/cart-context";
import { Link } from "react-router-dom";
import AllProductsContext from "../source/all-products-context";

// const productsArr = [
//   {
//     id: "A1",
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },

//   {
//     id: "A2",
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   },
//   {
//     id: "A3",
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   },
//   {
//     id: "A4",
//     title: "Blue Color",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   },
// ];

const Items = (props) => {
  const ctx = useContext(CartContext);
  const itemsContext = useContext(AllProductsContext);
  //console.log(itemsContext);

  const addButtonHandler = (data) => {
    const obj = {
      title: data.title,
      price: data.price,
      quantity: 1,
    };
    ctx.addToCart(obj);
  };
  return (
    <section>
      <h2 className="center">MUSIC</h2>
      <div className="container">
        {itemsContext.allProducts.map((item) => {
          return (
            <div key={item.id} className="divmargin">
              <h2 className="title">{item.title}</h2>
              <Link to={`/store/${item.id}`}>
                <img src={item.imageUrl} alt="album" />
              </Link>
              <footer className="footer">
                <span className="price">₹{item.price} </span>{" "}
                <span>
                  <button
                    className="buttonCart"
                    onClick={() => {
                      addButtonHandler(item);
                    }}
                  >
                    Add To Cart
                  </button>
                </span>
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(Items);
