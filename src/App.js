import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Liked from "./components/Liked";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked" element={<Liked />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
