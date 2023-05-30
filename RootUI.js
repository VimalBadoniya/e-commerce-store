import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Brand from "./Brand";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import LoginPage from "../login/LoginPage";


function RootUI() {
  const [isCart, setCart] = useState(false);
  const [isFooter , setFooter] = useState(false);
  const [userLoggedIn , setUserLoggedIn] = useState(false);

  const showCartHandler = () => {
    setCart(true);
    setFooter(false)
  };
  const hideCartHandler = () => {
    setCart(false);
    setFooter(true);
  };
  const loginHandler = () => {
    
    console.log("logged in into store");
    setUserLoggedIn(true);
  };
  const logoutHandler = (event)=>{
    event.preventDefault();
    setUserLoggedIn(false);
  }

  return (
    <React.Fragment>
      <Header onCart={showCartHandler} onLogout={logoutHandler}/>
      {!userLoggedIn && <LoginPage onlogin={loginHandler}></LoginPage>}
      {isCart && <Cart onCartClose={hideCartHandler}></Cart>}
      <Brand />
      <Outlet />
      {isFooter && <Footer />}
    </React.Fragment>
  );
}

export default React.memo(RootUI);
