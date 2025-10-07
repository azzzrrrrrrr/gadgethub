import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";
import TV from "./pages/TV";
import Speaker from "./pages/Speaker";
import { CartProvider } from "./context/CartContext.jsx";
import CartPanel from "./components/CartPanel.jsx";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <header className="navbar">
          <h1 className="logo">GadgetHub</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/phones">Phones</a>
            <a href="/laptops">Laptops</a>
            <a href="/tvs">TVs</a>
            <a href="/speakers">Speakers</a>
          </nav>
          <button className="cart-nav-btn" onClick={() => setCartOpen(true)}>Cart</button>
        </header>
        <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phone />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/tvs" element={<TV />} />
          <Route path="/speakers" element={<Speaker />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
