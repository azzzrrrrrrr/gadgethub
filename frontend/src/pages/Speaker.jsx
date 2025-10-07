import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Category.css";
import speaker1 from "../assets/speakers/speaker1.jpg";
import speaker2 from "../assets/speakers/speaker2.jpg";
import speaker3 from "../assets/speakers/speaker3.jpg";

const speakers = [
  { name: "JBL Flip 6", price: "₹11,499", image: speaker1 },
  { name: "Sony SRS-XB33", price: "₹14,999", image: speaker2 },
  { name: "Boat Stone 1200", price: "₹4,999", image: speaker3 },
];

function Speaker() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="category-page">
      <h2>Premium Speakers</h2>
      <div className="product-grid">
        {speakers.map((item, index) => (
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

export default Speaker;
