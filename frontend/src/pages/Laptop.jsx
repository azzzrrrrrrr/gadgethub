import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Category.css";
import laptop1 from "../assets/laptops/laptop1.jpg";
import laptop2 from "../assets/laptops/laptop2.jpg";
import laptop3 from "../assets/laptops/laptop3.jpg";

const laptops = [
  { name: "MacBook Pro M3", price: "₹1,89,999", image: laptop1 },
  { name: "Dell XPS 15", price: "₹1,49,999", image: laptop2 },
  { name: "ASUS ROG Zephyrus", price: "₹1,69,999", image: laptop3 },
];

function Laptop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="category-page">
      <h2>Powerful Laptops</h2>
      <div className="product-grid">
        {laptops.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop;
