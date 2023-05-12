import React from "react";
import "./App.css";
import CartProvider from "./source/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import RootUI from "./UI/RootUI";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import ErrorPage from "./UI/ErrorPage";
import ProductDetailPage from "./UI/ProductDetailPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootUI />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/store/:id", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider className="App">
      <RouterProvider router={myRouter} />
    </CartProvider>
  );
}

export default App;
