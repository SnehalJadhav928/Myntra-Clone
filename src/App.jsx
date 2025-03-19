import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Men from "./Components/Men/Men"; // ✅ Correct Import
import Women from "./Components/Women/Women";
import Kids from "./Components/Kids/Kids";
// import Beauty from "./Components/Beauty/Beauty";
import Login from "./Components/Login/Login";
import Bag from "./Components/Bag/Bag";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productWithId = { ...product, id: Date.now() };
    setCart((prevCart) => [...prevCart, productWithId]);
    // alert("Product Added to Cart");
  };

  const removeFromCart = (idToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
  };

  return (
    <Router>
      <Navbar cartItems={cart} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/men" element={<Men addToCart={addToCart} />} /> {/* ✅ Fix */}
        <Route path="/women" element={<Women addToCart={addToCart}/>} />
        <Route path="/kids" element={<Kids addToCart={addToCart}/>} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag removeFromCart={removeFromCart} cartItems={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
