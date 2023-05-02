import React, { useContext } from "react";
import { FcAbout, FcFaq } from "react-icons/fc";
import { BiHomeHeart } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import "./Header.css";
import CartContext from "../source/cart-context";

const Header = (props) => {
  const ctx = useContext(CartContext)
  
  return (
    <ul className="ul">
      <li className="li">
        <BiHomeHeart className="white-icon" />
        <a href="#home" className="a">Home</a>
      </li>
      <li className="li">
        <FaStore className="white-icon" />
        <a href="#store" className="a">Store</a>
      </li>
      <li className="li">
        <FcAbout />
        <a href="#about" className="a">About</a>
      </li>
      <li className="li">
        <FcFaq />
        <a href="#faq" className="a">FAQ</a>
      </li>
      <li className="li">
        <button className="button" onClick={props.onCart}>
          <BsCartCheckFill />
          Your Cart <span>{ctx.totalQuantity}</span>
        </button>
      </li>
    </ul>
  );
};

export default Header;
