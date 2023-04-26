import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Brnad from './components/Brand';
import Items from './components/Items';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './source/CartProvider';

function App() {
  const [isCart , setCart] = useState(false);
  const showCartHandler = ()=>{
    setCart(true)
  }
  const hideCartHandler = ()=>{
    setCart(false)
  }

  return (
    <CartProvider className="App">
      <Header onCart={showCartHandler}/>
      <Brnad/>
      <Items  onCartShow={showCartHandler}/>
      <Footer/>
      {isCart && <Cart onCartClose={hideCartHandler}/>}
    </CartProvider>
  );
}

export default App;
