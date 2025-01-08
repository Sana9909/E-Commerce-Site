import React from 'react'
import { createBrowserRouter,RouterProvider,BrowserRouter, Routes, Route, Navigate,Outlet} from "react-router-dom"; 

import './App.scss';

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import Slider from "./components/Slider/Slider";
import {createPortal} from "react-dom";

import { useState } from "react";

const Layout = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleMenu = () => {
    setShowSideMenu((previousState) => {
      console.log(previousState);
      return !previousState;
    });
    
  }

  return (
    <div className="App">
      <Navbar toggleMenu={toggleMenu} />
      {
        createPortal(
          <SideMenu toggleMenu={toggleMenu} showSideMenu={showSideMenu}/>,
          document.body
        )
      }
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "*",
        element: <Navigate to="/" />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
