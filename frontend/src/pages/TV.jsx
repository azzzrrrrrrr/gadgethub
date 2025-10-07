import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Category.css";
import tv1 from "../assets/tvs/tv1.jpg";
import tv2 from "../assets/tvs/tv2.jpg";
import tv3 from "../assets/tvs/tv3.jpg";

const tvs = [
  { name: "Samsung QLED 55\"", price: "₹89,999", image: tv1 },
  { name: "Sony Bravia OLED 65\"", price: "₹1,49,999", image: tv2 },
  { name: "LG NanoCell 50\"", price: "₹74,999", image: tv3 },
];

function TV() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="category-page">
      <h2>Smart TVs</h2>
      <div className="product-grid">
        {tvs.map((item, index) => (
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

export default TV;
