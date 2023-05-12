import React, { useContext } from "react";
import { FcAbout, FcFaq } from "react-icons/fc";
import { BiHomeHeart } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import "./Header.css";
import CartContext from "../source/cart-context";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  const ctx = useContext(CartContext);

  return (
    <header className="headercontainer">
      <nav>
        <ul className="ul">
          <li className="li">
            <BiHomeHeart className="white-icon" />
            <NavLink to="/" className="a">
              Home
            </NavLink>
          </li>
          <li className="li">
            <FaStore className="white-icon" />
            <NavLink to="/store" className="a"  >
              Store
            </NavLink>
          </li>
          <li className="li">
            <FcAbout />
            <NavLink to="/about" className="a">
              About
            </NavLink>
          </li>
          <li className="li">
            <FcFaq />
            <NavLink to="/faq" className="a">
              FAQ
            </NavLink>
          </li>
          <li className="li">
            
            <button className="button" onClick={props.onCart}>
              <BsCartCheckFill />
              Your Cart <span>{ctx.totalQuantity}</span>
            </button>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
